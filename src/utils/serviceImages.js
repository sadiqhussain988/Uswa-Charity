const serviceImageModules = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

const serviceImageMap = Object.fromEntries(
  Object.entries(serviceImageModules).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ]),
);

export function getServiceImage(service) {
  if (!service) return "";
  return serviceImageMap[service.image] || service.imageUrl || "";
}
