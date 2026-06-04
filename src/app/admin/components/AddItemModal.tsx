import { useState } from "react";
import { X, Upload, Plus, Trash2 } from "lucide-react";

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (item: any) => void;
}

export function AddItemModal({ isOpen, onClose, onSubmit }: AddItemModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Akni",
    price: "",
    isVeg: true,
    isBestseller: false,
    active: true,
    coverImage: "",
    additionalImages: [] as string[],
    prepTime: "",
    servings: "",
    spiceLevel: "Medium"
  });

  const categories = ["Akni", "Biryani", "Mughlai", "Kathiyawadi", "Desserts"];
  const spiceLevels = ["Mild", "Medium", "Hot", "Extra Hot"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: Date.now().toString(),
      price: parseFloat(formData.price),
      image: formData.coverImage
    });
    onClose();
  };

  const addImageSlot = () => {
    setFormData({ ...formData, additionalImages: [...formData.additionalImages, ""] });
  };

  const removeImageSlot = (index: number) => {
    setFormData({
      ...formData,
      additionalImages: formData.additionalImages.filter((_, i) => i !== index)
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-3xl w-full my-8">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h3 className="text-xl font-bold text-gray-900">Add New Menu Item</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Cover Image <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <input
                type="text"
                placeholder="Enter image URL"
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <p className="text-xs text-gray-500 mt-2">Recommended: 800x600px, JPG or PNG</p>
            </div>
          </div>

          {/* Additional Images */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-900">
                Additional Images (Optional)
              </label>
              <button
                type="button"
                onClick={addImageSlot}
                className="text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" />
                Add Image
              </button>
            </div>
            {formData.additionalImages.map((img, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Image ${index + 1} URL`}
                  value={img}
                  onChange={(e) => {
                    const newImages = [...formData.additionalImages];
                    newImages[index] = e.target.value;
                    setFormData({ ...formData, additionalImages: newImages });
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={() => removeImageSlot(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Item Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Signature Chicken Akni"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the dish, ingredients, and what makes it special..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Category and Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Price (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="0"
                min="0"
                step="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>

          {/* Prep Time and Servings */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Preparation Time (minutes)
              </label>
              <input
                type="number"
                value={formData.prepTime}
                onChange={(e) => setFormData({ ...formData, prepTime: e.target.value })}
                placeholder="20"
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Servings
              </label>
              <input
                type="text"
                value={formData.servings}
                onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
                placeholder="Serves 1-2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Spice Level */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Spice Level
            </label>
            <select
              value={formData.spiceLevel}
              onChange={(e) => setFormData({ ...formData, spiceLevel: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {spiceLevels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Type (Veg/Non-Veg) */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Food Type <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={formData.isVeg}
                  onChange={() => setFormData({ ...formData, isVeg: true })}
                  className="w-4 h-4 text-green-600 focus:ring-green-500"
                />
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">Vegetarian</span>
                </div>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={!formData.isVeg}
                  onChange={() => setFormData({ ...formData, isVeg: false })}
                  className="w-4 h-4 text-red-600 focus:ring-red-500"
                />
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-600" />
                  </div>
                  <span className="text-sm text-gray-700">Non-Vegetarian</span>
                </div>
              </label>
            </div>
          </div>

          {/* Status Toggles */}
          <div className="space-y-3">
            <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <div>
                <div className="font-medium text-gray-900">Mark as Bestseller</div>
                <div className="text-sm text-gray-500">Show bestseller badge on this item</div>
              </div>
              <input
                type="checkbox"
                checked={formData.isBestseller}
                onChange={(e) => setFormData({ ...formData, isBestseller: e.target.checked })}
                className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500"
              />
            </label>

            <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <div>
                <div className="font-medium text-gray-900">Active Status</div>
                <div className="text-sm text-gray-500">Make this item available for ordering</div>
              </div>
              <input
                type="checkbox"
                checked={formData.active}
                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
              />
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
