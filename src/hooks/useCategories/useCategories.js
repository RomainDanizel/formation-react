import { useEffect, useState } from 'react';

import { getCategories } from '../../services/categories/categories';

function useCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(data => setCategories(data));
  }, [setCategories]);
  return categories;
}

export default useCategories;
