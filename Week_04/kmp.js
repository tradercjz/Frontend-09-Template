function kmp(source, pattern) {
  let table = new Array(pattern.length).fill(0);
  {
      let i = 1, j = 0;

      while(i < pattern.length) {
          if(pattern[i] === pattern[j]) {
              i++;
              j++;
              if(i < pattern.length) table[i] = j;
          } else {
              if(j > 0) {
                  j = table[j];
              }
              else {
                  ++i;
              }
          }
      }
  }

  console.log(table);

  {
      let i = 0, j = 0;
      while(i < source.length) {
          console.log(pattern[j], source[i]);
          if(pattern[j] === source[i]) {
              i++, j++;
          } else {
              if(j > 0) {
                  j = table[j];
              } else {
                  i++;
              }
          }
          if(j === pattern.length) return true;
      }
      return false;
  }
}