export async function getGithubRepositories() {
  const apiUrl = `https://api.github.com/users/Abdellah-belcaid/repos`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch repositories. Status code: ${response.status}`
      );
    }

    const repositories = await response.json();
    return repositories;
  } catch (error) {
    throw new Error(`Error fetching repositories: ${error.message}`);
  }
}
