export async function api(path, opts = {}) {
  const token = localStorage.getItem('tok') || ''
  const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) }
  if (token) headers.Authorization = 'Bearer ' + token
  const r = await fetch(path, { ...opts, headers })
  const t = await r.text()
  let data = {}
  try {
    data = t ? JSON.parse(t) : {}
  } catch {
    data = { detail: t }
  }
  if (!r.ok) throw new Error(data.detail || data.message || r.statusText)
  if (Array.isArray(data)) {
    return data.map((row) => ({
      ...row,
      nominal_nm: row.nominal_nm === 0 ? '' : row.nominal_nm,
    }))
  }
  return data
}
