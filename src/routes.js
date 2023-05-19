const { addNoteHandler, getAllNotesHandler, getNotebyIdHandler, editNotebyIdHandler } = require("./handler");

const routes = [
    {
        method: "POST",
        path: "/notes",
        handler: addNoteHandler,
        // karena same-origin policy tetapi dapat diaktifkan di server secara keseluruhan
        // options: {
        //     cors: {
        //         origin: ["*"],
        //     },
        // },
    },
    {
        method: "GET",
        path: "/notes",
        handler: getAllNotesHandler,
    },
    {
        method: "GET",
        path: "/notes/{id}",
        handler: getNotebyIdHandler,
    },
    {
        method: "PUT",
        path: "/notes/{id}",
        handler: editNotebyIdHandler,
    },
];

module.exports = routes;
