import React from 'react';
import { Home } from 'lucide-react';
import {
  ExhibitorProfile,
  boothTypeOptions,
  pavilionOptions,
  hallOptions
} from '../types';

interface BoothTabProps {
  profile: ExhibitorProfile;
  setProfile: React.Dispatch<React.SetStateAction<ExhibitorProfile>>;
  isEditing: boolean;
}

export const BoothTab: React.FC<BoothTabProps> = ({
  profile,
  setProfile,
  isEditing,
}) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Home size={20} className="text-blue-600" />
          Booth Details
        </h2>
      </div>

      {/* Booth Information Card */}
      <div className="bg-white border rounded-xl overflow-hidden">
        {/* Header with stand number */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Assigned Stand</p>
              <p className="text-white text-2xl font-bold">
                {profile.exhibition?.standNumber || profile.boothNumber || 'Not assigned'}
              </p>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2 text-white text-sm font-medium">
              {profile.boothStatus || 'Pending'}
            </div>
          </div>
        </div>

        {/* Booth Specifications */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Booth Type */}
            <div className="border-b pb-3">
              <label className="block text-xs text-gray-500 mb-1">Booth Type</label>
              {isEditing ? (
                <select
                  value={profile.boothType || ''}
                  onChange={(e) => setProfile({ ...profile, boothType: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Type</option>
                  {boothTypeOptions.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              ) : (
                <p className="text-gray-900 font-medium">
                  {profile.boothType || 'Not specified'}
                </p>
              )}
            </div>

            {/* Booth Size */}
            <div className="border-b pb-3">
              <label className="block text-xs text-gray-500 mb-1">Booth Size</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.boothSize || ''}
                  onChange={(e) => setProfile({ ...profile, boothSize: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 3m x 3m"
                />
              ) : (
                <p className="text-gray-900 font-medium">
                  {profile.boothSize || 'Not specified'}
                </p>
              )}
            </div>

            {/* Dimensions */}
            <div className="border-b pb-3">
              <label className="block text-xs text-gray-500 mb-1">Dimensions</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.boothDimensions || ''}
                  onChange={(e) => setProfile({ ...profile, boothDimensions: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 3m width x 3m depth"
                />
              ) : (
                <p className="text-gray-900 font-medium">
                  {profile.boothDimensions || 'Not specified'}
                </p>
              )}
            </div>

            {/* Pavilion */}
            <div className="border-b pb-3">
              <label className="block text-xs text-gray-500 mb-1">Pavilion</label>
              {isEditing ? (
                <select
                  value={profile.exhibition.pavilion || ''}
                  onChange={(e) => setProfile({
                    ...profile,
                    exhibition: { ...profile.exhibition, pavilion: e.target.value }
                  })}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Pavilion</option>
                  {pavilionOptions.map(pavilion => (
                    <option key={pavilion} value={pavilion}>{pavilion}</option>
                  ))}
                </select>
              ) : (
                <p className="text-gray-900 font-medium">
                  {profile.exhibition.pavilion || 'Not specified'}
                </p>
              )}
            </div>

            {/* Hall */}
            <div className="border-b pb-3">
              <label className="block text-xs text-gray-500 mb-1">Hall</label>
              {isEditing ? (
                <select
                  value={profile.exhibition.hall || ''}
                  onChange={(e) => setProfile({
                    ...profile,
                    exhibition: { ...profile.exhibition, hall: e.target.value }
                  })}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Hall</option>
                  {hallOptions.map(hall => (
                    <option key={hall} value={hall}>{hall}</option>
                  ))}
                </select>
              ) : (
                <p className="text-gray-900 font-medium">
                  {profile.exhibition.hall || 'Not specified'}
                </p>
              )}
            </div>

            {/* Stand Number */}
            <div className="border-b pb-3">
              <label className="block text-xs text-gray-500 mb-1">Stand Number</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.exhibition.standNumber || profile.boothNumber || ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    setProfile({
                      ...profile,
                      exhibition: { ...profile.exhibition, standNumber: value },
                      boothNumber: value
                    });
                  }}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., A-1111"
                />
              ) : (
                <p className="text-gray-900 font-medium">
                  {profile.exhibition.standNumber || profile.boothNumber || 'Not assigned'}
                </p>
              )}
            </div>
          </div>

          {/* Price Section - in Rupees */}
          <div className="mt-6 pt-4 border-t-2 border-dashed">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Booth Price (₹)
                </label>
                <p className="text-xs text-gray-500">
                  Set the price for your booth in Indian Rupees
                </p>
              </div>
              {isEditing ? (
                <div className="w-48">
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={profile.boothPrice || ''}
                      onChange={(e) => setProfile({ ...profile, boothPrice: e.target.value })}
                      className="w-full border rounded-lg pl-8 pr-4 py-2 text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0"
                      min="0"
                      step="1"
                    />
                  </div>
                </div>
              ) : (
                <div className="text-right">
                  {profile.boothPrice ? (
                    <p className="text-2xl font-bold text-gray-900">
                      ₹{parseInt(profile.boothPrice).toLocaleString('en-IN')}
                    </p>
                  ) : (
                    <p className="text-gray-400 italic">Not set</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Booth Notes */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            {isEditing ? (
              <textarea
                value={profile.boothNotes || ''}
                onChange={(e) => setProfile({ ...profile, boothNotes: e.target.value })}
                rows={3}
                className="w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any special requirements or notes about your booth..."
              />
            ) : (
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                {profile.boothNotes || 'No additional notes'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
