open Jest
open Expect

external toJsObject : 'a Js.Dict.t -> < .. > Js.t = "%identity"

let server_roundtrip x url decode encode = (
  let headers = Bs_node_fetch.HeadersInit.make (toJsObject (Js_dict.fromList [("Content-Type", Js_json.string "application/json")])) in

  let reqInit = 
    Bs_node_fetch.RequestInit.make
      ~method_:Bs_node_fetch.Post
      ~mode:Bs_node_fetch.CORS
      ~body:(Bs_node_fetch.BodyInit.make (Js.Json.stringify (encode x)))
      ~headers:headers
      () in

  Js.Promise.(
    Bs_node_fetch.fetchWithInit url reqInit
    |> then_ (fun response -> (Bs_node_fetch.Response.text response)
    |> then_ (fun text -> assert (decode (Js.Json.parseExn text) = Js_result.Ok x) |> resolve))
  );
)

let file_roundtrip typename file decode encode = (
  let mapJsResult f r = (
    match r with
    | Js_result.Ok (a) -> Js_result.Ok(f a)
    | Js_result.Error(b) -> Js_result.Error(b)
  )  in

  describe typename (fun () ->
    test typename (fun () ->
      let f = Js.Json.parseExn (Node.Fs.readFileAsUtf8Sync file) in
      let rDecoded = decode f in
      expect (mapJsResult encode rDecoded) |> toEqual (Js_result.Ok f)
    )
  );
)
