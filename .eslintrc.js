module.exports = {
	"rules": {
	  "no-mixed-spaces-and-tabs": 0, // disable rule
	},
	parserOptions: {
	    parser: "babel-eslint",
	    // specifying a module sourcetype prevent eslint from marking import statements as errors
	    sourceType: "module"
	},
	"extends": ["plugin:vue/base"]
}
