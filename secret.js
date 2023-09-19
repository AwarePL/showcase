require('dotenv').config()
const pat = process.env.ASANA_PAT
const gid = process.env.ASANA_GID
const workspace = process.env.ASANA_WORKSPACE_NAME
const asana = { pat, gid, workspace }
module.exports = asana
