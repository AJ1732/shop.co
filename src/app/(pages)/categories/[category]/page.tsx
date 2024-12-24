interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  const { category } = params;

  return <div>CategoryPage {category}</div>;
};
export default CategoryPage;
