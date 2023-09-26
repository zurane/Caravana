export async function getVans(id) {
  const url = id ? `api/vans/${id}` : "/api/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Error fetching data from the server",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  return data.vans
}

export async function getVansData(id) {

  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Error fetching data from the server",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.vans
}

