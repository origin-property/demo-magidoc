var e;const o=((e=globalThis.__sveltekit_nlmn3r)==null?void 0:e.base)??"";var i;const l=((i=globalThis.__sveltekit_nlmn3r)==null?void 0:i.assets)??o;class n{constructor(t,s){this.status=t,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class c{constructor(t,s){this.status=t,this.location=s}}class h extends Error{constructor(t,s,a){super(a),this.status=t,this.text=s}}export{n as H,c as R,h as S,l as a,o as b};