import React, { useState } from 'react';
import { FileText, Plus, Trash2 } from 'lucide-react';
import { ExhibitorProfile, Brochure } from '../types';

interface BrochuresTabProps {
  profile: ExhibitorProfile;
  setProfile: React.Dispatch<React.SetStateAction<ExhibitorProfile>>;
  apiCall: (endpoint: string, options?: RequestInit, isFormData?: boolean) => Promise<any>;
  setShowSuccess: (show: boolean) => void;
  setShowError: (error: string | null) => void;
  formatDate: (dateString: string) => string;
}

export const BrochuresTab: React.FC<BrochuresTabProps> = ({
  profile,
  setProfile,
  apiCall,
  setShowSuccess,
  setShowError,
  formatDate,
}) => {
  const [showAddBrochure, setShowAddBrochure] = useState(false);
  const [saving, setSaving] = useState(false);

  // New brochure form state
  const [newBrochure, setNewBrochure] = useState<Brochure>({
    id: '',
    name: '',
    description: '',
    file: undefined,
    fileUrl: '',
    fileSize: '',
    downloads: 0,
    uploadedAt: new Date(),
  });

  const handleBrochureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewBrochure({
        ...newBrochure,
        file: file,
        name: file.name,
      });
    }
  };

  const handleAddBrochure = async () => {
    if (!newBrochure.name || !newBrochure.file) {
      setShowError("Please select a PDF file");
      return;
    }

    setSaving(true);
    setShowError(null);

    try {
      const formData = new FormData();
      formData.append("file", newBrochure.file);
      formData.append("title", newBrochure.name);
      formData.append("description", newBrochure.description);

      const result = await apiCall(
        "/api/exhibitorDashboard/brochures",
        {
          method: "POST",
          body: formData,
        },
        true
      );

      if (result.success) {
        setProfile(prev => ({
          ...prev,
          brochures: [...prev.brochures, result.data],
        }));

        setNewBrochure({
          id: '',
          name: '',
          description: '',
          file: undefined,
          fileUrl: '',
          fileSize: '',
          downloads: 0,
          uploadedAt: new Date(),
        });
        setShowAddBrochure(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error: any) {
      console.error('Error adding brochure:', error);
      setShowError(error.message || "Failed to upload brochure");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteBrochure = async (brochureId: string) => {
    try {
      await apiCall(`/api/exhibitorDashboard/brochures/${brochureId}`, {
        method: 'DELETE',
      });

      setProfile(prev => ({
        ...prev,
        brochures: prev.brochures.filter(b => b.id !== brochureId),
      }));

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error: any) {
      console.error('Error deleting brochure:', error);
      setShowError(error.message || 'Failed to delete brochure');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <FileText size={20} className="text-blue-600" />
          Brochures & Documents
        </h2>

        <button
          onClick={() => setShowAddBrochure(!showAddBrochure)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} className="mr-2" />
          Upload Brochure
        </button>
      </div>

      {/* Add Brochure Form */}
      {showAddBrochure && (
        <div className="mb-8 p-6 border-2 border-blue-200 rounded-xl bg-blue-50">
          <h3 className="font-semibold text-gray-900 mb-4">Upload New Brochure</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Document Name *
              </label>
              <input
                type="text"
                value={newBrochure.name}
                onChange={(e) => setNewBrochure({ ...newBrochure, name: e.target.value })}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Company Brochure 2024"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={newBrochure.description}
                onChange={(e) => setNewBrochure({ ...newBrochure, description: e.target.value })}
                rows={2}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Brief description of the document..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload PDF File *
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleBrochureUpload}
                className="w-full border rounded-lg px-4 py-2"
              />
              {newBrochure.file && (
                <p className="text-sm text-green-600 mt-2">
                  Selected: {newBrochure.file.name}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowAddBrochure(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddBrochure}
                disabled={saving || !newBrochure.name || !newBrochure.file}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Uploading...' : 'Upload Brochure'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Brochures List */}
      {profile.brochures && profile.brochures.length > 0 ? (
        <div className="space-y-4">
          {profile.brochures.map((brochure) => (
            <div key={brochure.id} className="border rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <FileText size={24} className="text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {brochure.file_url || brochure.fileUrl ? (
                          <a
                            href={brochure.file_url || brochure.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-1 text-blue-600"
                          >
                            {brochure.name}
                          </a>
                        ) : (
                          brochure.name
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{brochure.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span>{brochure.file_size || brochure.fileSize}</span>
                        <span>•</span>
                        <span>{brochure.downloads} downloads</span>
                        <span>•</span>
                        <span>
                          Uploaded {
                            brochure.createdAt || brochure.uploadedAt
                              ? formatDate((brochure.createdAt || brochure.uploadedAt).toString())
                              : 'Recently'
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDeleteBrochure(brochure.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border-2 border-dashed rounded-xl">
          <FileText size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Brochures Uploaded</h3>
          <p className="text-gray-500 mb-4">Upload brochures, catalogs, and documents for visitors to download.</p>
          <button
            onClick={() => setShowAddBrochure(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} className="mr-2" />
            Upload Your First Brochure
          </button>
        </div>
      )}
    </div>
  );
};
