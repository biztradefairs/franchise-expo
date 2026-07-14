import React, { useState } from 'react';
import { Tag, Plus, Trash2 } from 'lucide-react';
import { ExhibitorProfile, Brand } from '../types';

interface BrandsTabProps {
  profile: ExhibitorProfile;
  setProfile: React.Dispatch<React.SetStateAction<ExhibitorProfile>>;
  apiCall: (endpoint: string, options?: RequestInit, isFormData?: boolean) => Promise<any>;
  setShowSuccess: (show: boolean) => void;
  setShowError: (error: string | null) => void;
}

export const BrandsTab: React.FC<BrandsTabProps> = ({
  profile,
  setProfile,
  apiCall,
  setShowSuccess,
  setShowError,
}) => {
  const [showAddBrand, setShowAddBrand] = useState(false);
  const [saving, setSaving] = useState(false);

  // New brand form state
  const [newBrand, setNewBrand] = useState<Brand>({
    id: '',
    name: '',
    description: '',
  });

  const handleAddBrand = async () => {
    if (!newBrand.name) return;

    setSaving(true);
    try {
      const { id, ...brandPayload } = newBrand;

      const result = await apiCall('/api/exhibitorDashboard/brands', {
        method: 'POST',
        body: JSON.stringify(brandPayload),
      });

      if (result.success) {
        setProfile(prev => ({
          ...prev,
          brands: [...prev.brands, result.data],
        }));

        setNewBrand({
          id: '',
          name: '',
          description: '',
        });
        setShowAddBrand(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error: any) {
      console.error('Error adding brand:', error);
      setShowError(error.message || 'Failed to add brand');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteBrand = async (brandId: string) => {
    try {
      await apiCall(`/api/exhibitorDashboard/brands/${brandId}`, {
        method: 'DELETE',
      });

      setProfile(prev => ({
        ...prev,
        brands: prev.brands.filter(b => b.id !== brandId),
      }));

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error: any) {
      console.error('Error deleting brand:', error);
      setShowError(error.message || 'Failed to delete brand');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Tag size={20} className="text-blue-600" />
          Brands
        </h2>

        <button
          onClick={() => setShowAddBrand(!showAddBrand)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} className="mr-2" />
          Add Brand
        </button>
      </div>

      {/* Add Brand Form */}
      {showAddBrand && (
        <div className="mb-8 p-6 border-2 border-blue-200 rounded-xl bg-blue-50">
          <h3 className="font-semibold text-gray-900 mb-4">Add New Brand</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand Name *
              </label>
              <input
                type="text"
                value={newBrand.name}
                onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Apple, Samsung, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={newBrand.description}
                onChange={(e) => setNewBrand({ ...newBrand, description: e.target.value })}
                rows={3}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe the brand..."
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowAddBrand(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddBrand}
                disabled={saving || !newBrand.name}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Adding...' : 'Add Brand'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Brands List */}
      {profile.brands && profile.brands.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.brands.map((brand) => (
            <div key={brand.id} className="border rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{brand.name}</h3>
                      <p className="text-sm text-gray-600">{brand.description}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteBrand(brand.id)}
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
          <Tag size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Brands Added</h3>
          <p className="text-gray-500 mb-4">Add the brands you represent or distribute.</p>
          <button
            onClick={() => setShowAddBrand(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} className="mr-2" />
            Add Your First Brand
          </button>
        </div>
      )}
    </div>
  );
};
