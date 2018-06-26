type 'a sample =
  { seed : float
  ; samples : 'a list
  }
  
val decodeSampleUnsafe : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> Aeson.Json.t -> 'a sample

(** decode sample from a JSON but throw an exception if it is unable to decode *)
  
val decodeSample : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> Aeson.Json.t -> ('a sample, string) Belt.Result.t

(** decode sample from a JSON and return it as Belt.Result *)
  
val encodeSample : ('a -> Aeson.Json.t) -> 'a sample -> Aeson.Json.t

(** encode sample into a JSON *)
  
(* specs *)  

val jsonRoundtripSpec : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Aeson.Json.t) -> Aeson.Json.t -> Jest.assertion
  
(** try to encode and decode a JSON *)
  
val sampleJsonRoundtripSpec : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Aeson.Json.t) -> Aeson.Json.t -> Jest.assertion
  

(** try to encode and decode a sample JSON of a type *)

val valueRoundtripSpec : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Aeson.Json.t) -> 'a -> Jest.assertion

(** try to encode and decode a value of a type *)
  
val goldenSpec : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Aeson.Json.t) -> string -> string -> unit

(** decode and encode a golden file *)
  
val sampleGoldenSpec : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Aeson.Json.t) -> string -> string -> unit

(** decode and encode a golden file for a sample of a type *)
  
val serverSpec : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Aeson.Json.t) -> string -> string -> 'a -> unit

(** encode a value, POST it to a test server, receive a response and decode the response *)
  
val sampleServerSpec : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Aeson.Json.t) -> string -> string -> 'a list -> unit

(** encode a sample of a type, POST it to a test server, receive a response and decode the response *)

val isJsonFile : string -> bool
  
(** test if file name ends in ".json" *)

val goldenDirSpec : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Aeson.Json.t) -> string -> string -> unit

(** goldenSpec on json files in a dir *)
  
val sampleGoldenAndServerSpec : (Aeson.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Aeson.Json.t) -> string -> string -> string -> unit

(** goldenSpec and sampleServerSpec *)  

val decodeIntWithResult : Aeson.Json.t -> (int, string) Belt.Result.t

(** helper function for ocaml-export *)
