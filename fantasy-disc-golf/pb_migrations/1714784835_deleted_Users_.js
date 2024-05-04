/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2kimw69nulm4q9j");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "2kimw69nulm4q9j",
    "created": "2024-05-03 02:16:57.882Z",
    "updated": "2024-05-03 02:16:57.882Z",
    "name": "Users_",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": "@request.auth.id != \"\"",
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
