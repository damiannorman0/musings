const clean = (str) => {
  const c = str.replace(/<div>|<span>|<p>/gi, '');
  const c2 = c.replace(/<\/div>|<\/span>|<\/p>/gi, '');
  return c2;
};

export {
  clean,
}