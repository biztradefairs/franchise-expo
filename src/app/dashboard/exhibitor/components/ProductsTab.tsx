import React, { useState } from 'react';
import { Package, Plus, Trash2 } from 'lucide-react';
import { ExhibitorProfile, Product } from '../types';

interface ProductsTabProps {
  profile: ExhibitorProfile;
  setProfile: React.Dispatch<React.SetStateAction<ExhibitorProfile>>;
  apiCall: (endpoint: string, options?: RequestInit, isFormData?: boolean) => Promise<any>;
  setShowSuccess: (show: boolean) => void;
  setShowError: (error: string | null) => void;
}

export const ProductsTab: React.FC<ProductsTabProps> = ({
  profile,
  setProfile,
  apiCall,
  setShowSuccess,
  setShowError,
}) => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [saving, setSaving] = useState(false);

  // New product form state
  const [newProduct, setNewProduct] = useState<Product>({
    id: '',
    name: '',
    description: '',
    category: '',
    price: '',
    specifications: {},
  });

  const [newSpecKey, setNewSpecKey] = useState('');
  const [newSpecValue, setNewSpecValue] = useState('');

  const handleAddSpecification = () => {
    if (!newSpecKey || !newSpecValue) return;

    setNewProduct({
      ...newProduct,
      specifications: {
        ...newProduct.specifications,
        [newSpecKey]: newSpecValue,
      },
    });

    setNewSpecKey('');
    setNewSpecValue('');
  };

  const handleRemoveSpecification = (key: string) => {
    const specs = { ...newProduct.specifications };
    delete specs[key];
    setNewProduct({
      ...newProduct,
      specifications: specs,
    });
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.description) return;

    setSaving(true);
    try {
      const { id, ...productPayload } = newProduct;
      const payload = {
        ...productPayload,
        specifications: newProduct.specifications || {},
      };

      const result = await apiCall('/api/exhibitorDashboard/products', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      if (result.success) {
        setProfile(prev => ({
          ...prev,
          products: [...prev.products, result.data],
        }));

        setNewProduct({
          id: '',
          name: '',
          description: '',
          category: '',
          price: '',
          specifications: {},
        });
        setShowAddProduct(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error: any) {
      console.error('Error adding product:', error);
      setShowError(error.message || 'Failed to add product');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await apiCall(`/api/exhibitorDashboard/products/${productId}`, {
        method: 'DELETE',
      });

      setProfile(prev => ({
        ...prev,
        products: prev.products.filter(p => p.id !== productId),
      }));

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error: any) {
      console.error('Error deleting product:', error);
      setShowError(error.message || 'Failed to delete product');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Package size={20} className="text-blue-600" />
          Products & Services
        </h2>

        <button
          onClick={() => setShowAddProduct(!showAddProduct)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} className="mr-2" />
          Add Product
        </button>
      </div>

      {/* Add Product Form */}
      {showAddProduct && (
        <div className="mb-8 p-6 border-2 border-blue-200 rounded-xl bg-blue-50">
          <h3 className="font-semibold text-gray-900 mb-4">Add New Product/Service</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Air Freight Services"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Logistics"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                rows={3}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your product or service..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (Optional)
              </label>
              <input
                type="text"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., ₹5000 per unit"
              />
            </div>

            {/* Specifications */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specifications
              </label>
              <div className="space-y-3">
                {/* Existing specs */}
                {Object.entries(newProduct.specifications || {}).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700 min-w-[120px]">{key}:</span>
                    <span className="text-sm text-gray-600">{value || ''}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSpecification(key)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}

                {/* Add new spec */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newSpecKey}
                    onChange={(e) => setNewSpecKey(e.target.value)}
                    className="flex-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Specification name"
                  />
                  <input
                    type="text"
                    value={newSpecValue}
                    onChange={(e) => setNewSpecValue(e.target.value)}
                    className="flex-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Value"
                  />
                  <button
                    type="button"
                    onClick={handleAddSpecification}
                    disabled={!newSpecKey || !newSpecValue}
                    className="px-3 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowAddProduct(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddProduct}
                disabled={saving || !newProduct.name || !newProduct.description}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Adding...' : 'Add Product'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Products List */}
      {profile.products && profile.products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.products.map((product) => (
            <div key={product.id} className="border rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {product.category && (
                      <span className="inline-flex px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {product.category}
                      </span>
                    )}
                    {product.price && (
                      <span className="inline-flex px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {product.price}
                      </span>
                    )}
                  </div>

                  {product.specifications && Object.keys(product.specifications).length > 0 && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Specifications:</p>
                      <div className="space-y-1">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-xs">
                            <span className="text-gray-500">{key}:</span>
                            <span className="text-gray-700">{value || ''}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border-2 border-dashed rounded-xl">
          <Package size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Products Added</h3>
          <p className="text-gray-500 mb-4">Start adding your products and services to showcase them to visitors.</p>
          <button
            onClick={() => setShowAddProduct(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} className="mr-2" />
            Add Your First Product
          </button>
        </div>
      )}
    </div>
  );
};
