'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface Product {
  _id: number
  name: string
  category: string
  description: string
  image: string
  shades: string[]
  colors: string[]
}

const CATEGORIES = ['Lips', 'Eyes', 'Face', 'Skincare', 'Eye Shadow', 'Highlighter', 'Primer']

interface EditProductModalProps {
  product: Product
  onClose: () => void
  onSuccess: () => void
}

export function EditProductModal({ product, onClose, onSuccess }: EditProductModalProps) {
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    description: product.description,
  })
  const [shades, setShades] = useState(product.shades)
  const [colors, setColors] = useState(product.colors)
  const [image, setImage] = useState<string>(product.image)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleShadeChange = (index: number, value: string) => {
    const newShades = [...shades]
    newShades[index] = value
    setShades(newShades)
  }

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...colors]
    newColors[index] = value
    setColors(newColors)
  }

  const handleAddShade = () => {
    setShades([...shades, ''])
    setColors([...colors, '#000000'])
  }

  const handleRemoveShade = (index: number) => {
    setShades(shades.filter((_, i) => i !== index))
    setColors(colors.filter((_, i) => i !== index))
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const formDataObj = new FormData()
    formDataObj.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataObj,
        credentials: 'include'
      })

      const data = await response.json()

      if (response.ok && data.url) {
        setImage(data.url)
      } else {
        setError('Failed to upload image')
      }
    } catch {
      setError('Error uploading image')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/products', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          id: product._id,
          ...formData,
          image,
          shades: shades.filter(s => s.trim()),
          colors: colors.slice(0, shades.filter(s => s.trim()).length)
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to update product')
        setLoading(false)
        return
      }

      onSuccess()
    } catch {
      setError('An error occurred while updating the product')
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-foreground">Edit Product</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 text-destructive rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Image Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Product Image
            </label>
            <div className="flex gap-4">
              {image && (
                <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt="Product"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="flex-1 block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-muted file:text-foreground hover:file:bg-muted/80"
              />
            </div>
          </div>

          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              required
            >
              <option value="">Select a category</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              required
            />
          </div>

          {/* Shades */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-foreground">
                Shades
              </label>
              <button
                type="button"
                onClick={handleAddShade}
                className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                + Add Shade
              </button>
            </div>
            <div className="space-y-3">
              {shades.map((shade, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="text"
                    value={shade}
                    onChange={(e) => handleShadeChange(index, e.target.value)}
                    placeholder="Shade name"
                    className="flex-1 px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground text-sm placeholder:text-muted-foreground"
                  />
                  <input
                    type="color"
                    value={colors[index] || '#000000'}
                    onChange={(e) => handleColorChange(index, e.target.value)}
                    className="w-12 h-10 border border-border rounded-lg cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveShade(index)}
                    className="px-3 py-2 text-destructive hover:bg-destructive/10 rounded-lg transition text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground rounded-lg transition font-medium"
            >
              {loading ? 'Updating...' : 'Update Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
