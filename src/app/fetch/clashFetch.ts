import { CLASH_URL } from "@/lib/apiEndPoints";

export async function fetchClashs(token: string) {
  const res = await fetch(CLASH_URL, {
    headers: {
      Authorization: token,
    },
    next: {
      revalidate: 60 * 60,
      tags: ["dashboard"],
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const response = await res.json();
  console.log("response", response);
  if (response) {
    return response;
  }
  return [];
}

export async function fetchClash(id: number) {
  const res = await fetch(`${CLASH_URL}/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const response = await res.json();
  console.log("response-id", response);
  if (response) {
    return response;
  }
  return null;
}