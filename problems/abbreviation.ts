function abbreviation(a: string, b: string): string {
  // Write your code here
  //check which is the largest string
  
  if(b.length > a.length) {
    return 'NO'
  }

  const hasAllCaracters = [...b].every((c) => 
    a.includes(c)
  )
  
  if (!hasAllCaracters) {
    return 'NO'
  }
  
  return 'YES';
}