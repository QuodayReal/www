const GetQuotesQuery = `
query GetQuotesQuery(
	$random: Boolean,
	$limit: Int = 20,
	$skip: Int = 0,
) {
  quotes(random: $random, skip: $skip, limit: $limit) {
    id
    author {
      name
    }
    
    translations {
      language
      text
    }
  }
}
`;


export {
	GetQuotesQuery
}
