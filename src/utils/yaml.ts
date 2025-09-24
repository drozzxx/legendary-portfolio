// Minimal YAML parser for a constrained subset used in experience.yml
// Supports arrays of objects with scalar fields and nested string arrays

export type YamlValue = string | number | boolean | YamlObject | YamlValue[]
export type YamlObject = { [key: string]: YamlValue }

export function parseSimpleYaml(input: string): YamlObject[] {
  const lines = input.replace(/\r\n?/g, '\n').split('\n')
  const items: YamlObject[] = []
  let current: YamlObject | null = null
  let currentArrayKey: string | null = null

  const flush = () => {
    if (current) items.push(current)
    current = null
    currentArrayKey = null
  }

  for (const rawLine of lines) {
    const line = rawLine.replace(/\t/g, '  ')
    if (!line.trim()) {
      // blank line separates items
      continue
    }

    // New item
    if (line.trimStart().startsWith('- ') && line.startsWith('- ')) {
      flush()
      current = {}
      const afterDash = line.slice(2).trim()
      if (afterDash.length) {
        const [k, v] = splitKeyVal(afterDash)
        if (k) current[k] = coerceVal(v)
      }
      continue
    }

    if (!current) {
      // if file starts without leading "- ", ignore until a dash appears
      continue
    }

    // Nested array entries like: "    - text"
    if (line.includes('- ') && line.trimStart().startsWith('- ') && currentArrayKey) {
      const arr = (current[currentArrayKey] as YamlValue[]) || []
      arr.push(line.trim().slice(2).trim())
      current[currentArrayKey] = arr
      continue
    }

    // key: value or key: (start array)
    const indent = line.match(/^\s*/)?.[0].length ?? 0
    const [key, val] = splitKeyVal(line.trim())
    if (!key) continue

    if (val === undefined || val === null || val === '') {
      // could be start of array next lines
      currentArrayKey = key
      current[key] = []
    } else if (val === '[]') {
      current[key] = []
      currentArrayKey = null
    } else {
      current[key] = coerceVal(val)
      currentArrayKey = null
    }
  }

  flush()
  return items
}

function splitKeyVal(s: string): [string, string | undefined] {
  const idx = s.indexOf(':')
  if (idx === -1) return [s.trim(), undefined]
  const key = s.slice(0, idx).trim()
  const val = s.slice(idx + 1).trim()
  return [key, val]
}

function coerceVal(v?: string): YamlValue {
  if (v === undefined) return ''
  if (v === 'true') return true
  if (v === 'false') return false
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v)
  // strip quotes
  return v.replace(/^"|"$/g, '').replace(/^'|'$/g, '')
}


