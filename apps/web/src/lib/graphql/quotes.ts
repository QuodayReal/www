const GetQuotesQuery = `
query GetQuotesQuery {
  quotes {
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
