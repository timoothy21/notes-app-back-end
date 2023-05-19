const { addNoteHandler, getAllNotesHandler } = require("./handler");

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
];

module.exports = routes;
