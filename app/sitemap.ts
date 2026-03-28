import { MetadataRoute } from "next";

const BASE_URL = "https://www.odogwuafricanshop.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/shop", "/about", "/contact"];

  return routes.map((route) => ({
    url: BASE_URL + route,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/shop" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/shop" ? 0.9 : 0.7,
  }));
}
