'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { LogOut, Plus, Edit2, Trash2 } from 'lucide-react'
import { ProductForm } from '@/components/admin/product-form'
import { EditProductModal } from '@/components/admin/edit-product-modal'

interface Product {
  _id: number
  name: string
  category: string
  description: string
  image: string
  shades: string[]
  colors: string[]
}

export default function AdminDashboard() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [deletingId, setDeletingId] = useState<number | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check authentication
        const authResponse = await fetch('/api/auth/check', {
          credentials: 'include'
        })
        
        if (authResponse.status === 401) {
          router.push('/admin/login')
          return
        }

        // Fetch products
        const productsResponse = await fetch('/api/products')
        if (productsResponse.ok) {
          const data = await productsResponse.json()
          setProducts(data.products)
        }
      } catch (error) {
        console.error('[v0] Auth check failed:', error)
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const handleProductAdded = () => {
    setShowForm(false)
    refreshProducts()
  }

  const refreshProducts = () => {
    fetch('/api/products', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProducts(data.products)
        }
      })
      .catch(err => console.error('[v0] Failed to refresh products:', err))
  }

  const handleDeleteProduct = async (id: number) => {
    if (!confirm('Are you sure you want to delete this product?')) {
      return
    }

    setDeletingId(id)
    try {
      const response = await fetch(`/api/products?id=${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      if (response.ok) {
        setProducts(products.filter(p => p._id !== id))
      } else {
        alert('Failed to delete product')
      }
    } catch (error) {
      console.error('[v0] Delete error:', error)
      alert('Error deleting product')
    } finally {
      setDeletingId(null)
    }
  }

  const handleEditSuccess = () => {
    setEditingProduct(null)
    refreshProducts()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-serif font-bold text-foreground">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Add Product Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              Products Management
            </h2>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition"
              >
                <Plus size={20} />
                Add Product
              </button>
            )}
          </div>

          {showForm && (
            <div className="mb-8">
              <ProductForm onSuccess={handleProductAdded} />
              <button
                onClick={() => setShowForm(false)}
                className="mt-4 text-muted-foreground hover:text-foreground text-sm font-medium"
              >
                &larr; Cancel
              </button>
            </div>
          )}
        </div>

        {/* Products List */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Products ({products.length})
          </h3>

          {products.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground">No products added yet. Click &quot;Add Product&quot; to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <div
                  key={product._id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative w-full h-48 bg-muted">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-1">{product.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {product.category}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    {product.shades.length > 0 && (
                      <div className="flex gap-2 flex-wrap mb-2">
                        {product.shades.map((shade, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded"
                          >
                            <div
                              className="w-3 h-3 rounded-full border border-border"
                              style={{
                                backgroundColor: product.colors[idx] || '#000000'
                              }}
                            />
                            <span className="text-muted-foreground">{shade}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-3">ID: {product._id}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingProduct(product)}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent/20 hover:bg-accent/30 text-accent-foreground rounded text-sm font-medium transition"
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          disabled={deletingId === product._id}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-destructive/10 hover:bg-destructive/20 disabled:opacity-50 text-destructive rounded text-sm font-medium transition"
                        >
                          <Trash2 size={16} />
                          {deletingId === product._id ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Edit Modal */}
        {editingProduct && (
          <EditProductModal
            product={editingProduct}
            onClose={() => setEditingProduct(null)}
            onSuccess={handleEditSuccess}
          />
        )}
      </main>
    </div>
  )
}
