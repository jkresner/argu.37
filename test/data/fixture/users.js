module.exports = {

  jk: {
    "_id" : ObjectId("5af6da2ea7d95b1016b45fed"),
    "name" : "Jonathon Kresner",
    "auth" : {
        "gp" : {
            "tokens" : {
                "ag" : {
                    "token" : "",
                    "refresh" : ""
                }
            },
            "verified" : false,
            "url" : "https://plus.google.com/111546642302857408422",
            "name" : {
                "givenName" : "Jonathon",
                "familyName" : "Kresner"
            },
            "displayName" : "Jonathon Kresner",
            "id" : "111546642302857408422",
            "emails" : [
                {
                    "type" : "account",
                    "value" : "jkresner@gmail.com"
                }
            ],
            "gender" : "male"
        }
    },
    "log" : {
        "history" : [
            {
                "action" : "signup",
                "_id" : ObjectId("5af6da2ea7d95b1016b45fee"),
                "by" : {
                    "_id" : ObjectId("5af6da2ea7d95b1016b45fed"),
                    "name" : "Jonathon Kresner"
                }
            }
        ],
        "last" : {
            "action" : "signup",
            "_id" : ObjectId("5af6da2ea7d95b1016b45fee"),
            "by" : {
                "_id" : ObjectId("5af6da2ea7d95b1016b45fed"),
                "name" : "Jonathon Kresner"
            }
        }
    },
    "photos" : [
        {
            "value" : "https://lh3.googleusercontent.com/-daU--wCrRcI/AAAAAAAAAAI/AAAAAAAAAKs/o_lTNF4G8Pk/photo.jpg?sz=50",
            "type" : "gplus",
            "primary" : true,
            "_id" : ObjectId("5af6da2ea7d95b1016b45fef")
        }
    ],
    "emails" : [
        {
            "value" : "jkresner@gmail.com",
            "primary" : true,
            "verified" : true,
            "_id" : ObjectId("5af6da2ea7d95b1016b45ff0")
        }
    ]
  }

}
