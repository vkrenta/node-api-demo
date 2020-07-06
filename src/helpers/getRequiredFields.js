export default function getRequiredFields(req, res, ...params) {
  const fields = {};
  const nulled = [];
  params.forEach((p) => {
    if (req.body[p]) fields[p] = req.body[p];
    else nulled.push(p);
  });

  const err = new Error();
  err.code = 666228;
  err.nulled = nulled;
  err.message = 'Missing required fields';
  if (nulled.length) throw err;

  return fields;
}
