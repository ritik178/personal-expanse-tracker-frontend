import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CategoryCrud = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState(""); // For adding/editing category
  const [editCategory, setEditCategory] = useState(null); // For editing
  const token = localStorage.getItem('token'); // Get token for authorization

  useEffect(() => {
    fetchCategories(); // Fetch categories on page load
  }, []);

  // Fetch categories from the backend
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories/getAll", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to load categories.");
    }
  };

  // Handle adding a new category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (categoryName.trim() === "") return;

    try {
      const payload = { name: categoryName };
      await axios.post("http://localhost:8080/api/categories/post", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Category added successfully!");
      setCategoryName(""); // Clear input field
      fetchCategories(); // Reload categories list
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Failed to add category.");
    }
  };

  // Handle updating an existing category
  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    if (!editCategory) return;

    try {
      const payload = { name: categoryName };
      await axios.put(`http://localhost:8080/api/categories/update/${editCategory.id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Category updated successfully!");
      setCategoryName("");
      setEditCategory(null);
      fetchCategories();
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Failed to update category.");
    }
  };

  // Handle deleting a category
  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/categories/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Category deleted successfully!");
      fetchCategories(); // Reload categories list after deletion
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Failed to delete category.");
    }
  };

  // When edit button clicked
  const handleEditClick = (category) => {
    setEditCategory(category);
    setCategoryName(category.name);
  };

  // When cancel editing
  const handleCancelEdit = () => {
    setEditCategory(null);
    setCategoryName("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">
        {editCategory ? "Edit Category" : "Manage Categories"}
      </h2>

      {/* Form to add/edit a category */}
      <form onSubmit={editCategory ? handleUpdateCategory : handleAddCategory} className="space-y-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">Category Name</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter category name"
            required
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
          >
            {editCategory ? "Update Category" : "Add Category"}
          </button>

          {editCategory && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-md"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Category list with edit and delete options */}
      <div className="space-y-4">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id} className="flex justify-between items-center">
              <span>{category.name}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditClick(category)}
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryCrud;

