"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: {
  title: string;
  // href: string;
  description: string;
  categories?: { name: string; href: string }[];
}[] = [
  {
    title: "Men's Fashion",
    // href: "/categories/mens",
    description:
      "Discover trendy shirts, shoes, and watches for the modern man.",
    categories: [
      { name: "Shirts", href: "/categories/mens-shirts" },
      { name: "Shoes", href: "/categories/mens-shoes" },
      { name: "Watches", href: "/categories/mens-watches" },
    ],
  },
  {
    title: "Women's Fashion",
    // href: "/categories/womens",
    description:
      "Explore elegant dresses, bags, jewelry, and accessories for women.",
    categories: [
      { name: "Dresses", href: "/categories/womens-dresses" },
      { name: "Bags", href: "/categories/womens-bags" },
      { name: "Jewelry", href: "/categories/womens-jewellery" },
      { name: "Shoes", href: "/categories/womens-shoes" },
      { name: "Watches", href: "/categories/womens-watches" },
      { name: "Tops", href: "/categories/tops" },
    ],
  },
  {
    title: "Electronics",
    // href: "/categories/electronics",
    description:
      "Browse latest smartphones, laptops, tablets, and accessories.",
    categories: [
      { name: "Smartphones", href: "/categories/smartphones" },
      { name: "Laptops", href: "/categories/laptops" },
      { name: "Tablets", href: "/categories/tablets" },
      { name: "Mobile Accessories", href: "/categories/mobile-accessories" },
    ],
  },
  {
    title: "Beauty & Care",
    // href: "/categories/beauty",
    description: "Find skincare products, fragrances, and beauty essentials.",
    categories: [
      { name: "Skin Care", href: "/categories/skin-care" },
      { name: "Fragrances", href: "/categories/fragrances" },
    ],
  },
  {
    title: "Home & Living",
    // href: "/categories/home",
    description:
      "Shop furniture, kitchen accessories, and home decoration items.",
    categories: [
      { name: "Furniture", href: "/categories/furniture" },
      { name: "Kitchen Accessories", href: "/categories/kitchen-accessories" },
      { name: "Home Decoration", href: "/categories/home-decoration" },
      { name: "Groceries", href: "/categories/groceries" },
    ],
  },
  {
    title: "Sports & Automotive",
    // href: "/categories/sports-automotive",
    description: "Explore sports gear, vehicles, and automotive accessories.",
    categories: [
      { name: "Sports Accessories", href: "/categories/sports-accessories" },
      { name: "Sunglasses", href: "/categories/sunglasses" },
      { name: "Motorcycle", href: "/categories/motorcycle" },
      { name: "Vehicle", href: "/categories/vehicle" },
    ],
  },
];

interface NavigationProps {
  className?: string;
  onClose?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ className, onClose }) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem onClick={onClose}>
          <Link href="/shop" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              shop
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  // href={component.href}
                  categories={component.categories}
                  onClick={onClose}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    categories?: { name: string; href: string }[];
  }
>(({ className, title, children, categories, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>

          {categories && (
            <div className="mt-2 flex flex-wrap gap-x-2">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="text-muted-foreground hover:text-primary border-r border-neutral-800 pr-2 text-sm uppercase italic last:border-none hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navigation;
