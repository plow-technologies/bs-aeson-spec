type 'a sample =
  { seed : float
  ; samples : 'a list
  }
  
val decodeSampleUnsafe : (Js.Json.t -> ('a, string) Belt.Result.t) -> Js.Json.t -> 'a sample

(** decode sample from a JSON but throw an exception if it is unable to decode *)
  
val decodeSample : (Js.Json.t -> ('a, string) Belt.Result.t) -> Js.Json.t -> ('a sample, string) Belt.Result.t

(** decode sample from a JSON and return it as Belt.Result *)
  
val encodeSample : ('a -> Js.Json.t) -> 'a sample -> Js.Json.t

(** encode sample into a JSON *)
  
(* specs *)  

val jsonRoundtripSpec : (Js.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Js.Json.t) -> Js.Json.t -> Jest.assertion
  
(** try to encode and decode a JSON *)
  
val sampleJsonRoundtripSpec : (Js.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Js.Json.t) -> Js.Json.t -> Jest.assertion
  

(** try to encode and decode a sample JSON of a type *)

val valueRoundtripSpec : (Js.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Js.Json.t) -> 'a -> Jest.assertion

(** try to encode and decode a value of a type *)
  
val goldenSpec : (Js.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Js.Json.t) -> string -> string -> unit

(** decode and encode a golden file *)
  
val sampleGoldenSpec : (Js.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Js.Json.t) -> string -> string -> unit

(** decode and encode a golden file for a sample of a type *)
  
val serverSpec : (Js.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Js.Json.t) -> string -> string -> 'a -> unit

(** encode a value, POST it to a test server, receive a response and decode the response *)
  
val sampleServerSpec : (Js.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Js.Json.t) -> string -> string -> 'a list -> unit

(** encode a sample of a type, POST it to a test server, receive a response and decode the response *)

val isJsonFile : string -> bool
  
(** test if file name ends in ".json" *)

val goldenDirSpec : (Js.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Js.Json.t) -> string -> string -> unit

(** goldenSpec on json files in a dir *)
  
val sampleGoldenAndServerSpec : (Js.Json.t -> ('a, string) Belt.Result.t) -> ('a -> Js.Json.t) -> string -> string -> string -> unit

(** goldenSpec and sampleServerSpec *)  

val decodeIntWithResult : Js.Json.t -> (int, string) Belt.Result.t

(** helper function for ocaml-export *)
