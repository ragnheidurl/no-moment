module.exports = {
  rules: {
    "no-moment": {
      create(context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value === "moment") {
              context.report({
                node,
                message: "moment is not allowed",
              });
            }
          },
        };
      },
    },
  },
 configs: {
    recommended: {
      plugins: ["no-moment"],
      rules: {
        "no-moment/no-moment": "error",
      },
    },
  },
};
