import { getColorTheme } from "@/function/common";

export function HSIconKeyValue({icon, name, value, width, height, theme}:
  {icon: 'date' | 'phone' | 'address' | 'email', name: string, value: string, width?: string | number, height?: string | number, theme?: string}) {
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <div className="hs-icon-kv" style={{width: width ? width : '100%', height: height ? height : '100%', borderLeft: `2px solid rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue}})`}}>
      <div>
        
      </div>
      <div>

      </div>
      <div>

      </div>
      <style jsx>{`
        .hs-icon-kv {

        }
      `}</style>
    </div>
  )
}