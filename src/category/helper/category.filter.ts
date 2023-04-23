import { Category, ICategory, IChildrenCategory } from '../dto/category.dto'

export const categoryFlatArray = (data: ICategory[]) => {
  const flatCategory: Category[] = []

  const addCategoryArray = (category: IChildrenCategory[]) => {
    category.map(r => {
      if (!checkCategory(r.id)) {
        flatCategory.push({
          id: r.id,
          name: r.name,
          parentCategoryId: r.parentCategoryId,
          slug: r.slug,
          img: r.img,
          description: r.description,
          folderImg: r.folderImg,
        })
      }
    })
  }

  const checkCategory = (idCategory: number) => {
    const result = flatCategory.find(x => x.id == idCategory)
    return result
  }

  const parentCategory = () => {
    for (let i = 0; data.length > i; i++) {
      addCategoryArray(data)
      if (!childrenCategory(data[i].childrenCategories)) {
        i++
      }
    }
  }

  const childrenCategory = (childrenArray: IChildrenCategory[]) => {
    if (childrenArray.find(x => x.childrenCategories) === undefined) {
      addCategoryArray(childrenArray)
      return false
    } else {
      for (let i = 0; childrenArray.length > i; i++) {
        if (childrenArray[i].childrenCategories.length > 0) {
          addCategoryArray(childrenArray[i].childrenCategories)
          childrenCategory(childrenArray[i].childrenCategories)
        } else {
          addCategoryArray(childrenArray)
        }
      }
    }
  }
  parentCategory()

  return flatCategory
}



