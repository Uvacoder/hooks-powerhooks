(this["webpackJsonpwww.powerhooks.dev"]=this["webpackJsonpwww.powerhooks.dev"]||[]).push([[42],{365:function(e,n,t){"use strict";function a(e){e.languages.fsharp=e.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\(\*[\s\S]*?\*\)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,greedy:!0},"class-name":{pattern:/(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,lookbehind:!0,inside:{operator:/->|\*/,punctuation:/\./}},keyword:/\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,number:[/\b0x[\da-fA-F]+(?:un|lf|LF)?\b/,/\b0b[01]+(?:y|uy)?\b/,/(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,/\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/],operator:/([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/}),e.languages.insertBefore("fsharp","keyword",{preprocessor:{pattern:/^[^\r\n\S]*#.*/m,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/,lookbehind:!0,alias:"keyword"}}}}),e.languages.insertBefore("fsharp","punctuation",{"computation-expression":{pattern:/[_a-z]\w*(?=\s*\{)/i,alias:"keyword"}}),e.languages.insertBefore("fsharp","string",{annotation:{pattern:/\[<.+?>\]/,inside:{punctuation:/^\[<|>\]$/,"class-name":{pattern:/^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,lookbehind:!0},"annotation-content":{pattern:/[\s\S]+/,inside:e.languages.fsharp}}}})}e.exports=a,a.displayName="fsharp",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_fsharp.500cae14.chunk.js.map