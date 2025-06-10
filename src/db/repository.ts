export async function getAllLocations() {
  try {
    // await db locations
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching locations:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}
