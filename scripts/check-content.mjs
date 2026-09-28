import { checkContent } from "./content.mjs";
try {
  const result = checkContent(process.cwd());
  console.log(
    `内容检查通过：${result.files.length} 篇文档，${result.mods.length} 个 Mod，${result.links} 处内部链接。`,
  );
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
