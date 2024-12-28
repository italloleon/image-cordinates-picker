import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { useTheme } from "../theme-provider";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  return (
    <Select
      defaultValue={theme}
      onValueChange={(value: "dark" | "light" | "system") => {
        setTheme(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}
