
// declaration.d.ts
declare module "*.png"
declare module "*.jpg"
declare module "*.svg"
declare module "*.webp"

declare module "*.module.css"
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}