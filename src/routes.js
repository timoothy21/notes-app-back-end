const { addNoteHandler, getAllNotesHandler, getNotebyIdHandler, editNotebyIdHandler, deleteNotebyIdHandler } = require("./handler");

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
    {
        method: "DELETE",
        path: "/notes/{id}",
        handler: deleteNotebyIdHandler,
    },
];

module.exports = routes;
