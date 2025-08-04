import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: {
      400: "#3d3d3d",
      500: "#1d1d1d",
    },
    lightGray: {
      200: "#fafafa",
      300: "#f0f0f0",
      400: "#ededed",
      500: "#dddddd",
    },
    red: {
      500: "#ef4444",
    },
    yellow: {
      200: "#fff5c9",
      500: "#fbbf24", // primary
    },
    orange: {
      500: "#fb923c", // accent
    },
  },
  components: {
    Text: {
      baseStyle: {
        whiteSpace: "pre-line",
      },
      variants: {
        lgTitle: {
          fontSize: { base: "40px", lg: "60px" },
          lineHeight: { base: "45px", lg: "65px" },
          fontWeight: "bold",
        },
        title: {
          fontSize: { base: "30px", lg: "36px" },
          lineHeight: { base: "35px", lg: "40px" },
          fontWeight: "bold",
        },
        smTitle: {
          fontSize: "24px",
          fontWeight: "bold",
        },
        xsTitle: {
          fontSize: "18px",
          fontWeight: "bold",
        },
        xxsTitle: {
          fontWeight: "bold",
        },
        lgDescription: {
          color: "gray",
          fontSize: { base: "16px", lg: "20px" },
          fontWeight: "medium",
        },
        description: {
          color: "gray",
          fontSize: "18px",
          fontWeight: "medium",
        },
        smDescription: {
          color: "gray",
          fontSize: "14px",
          fontWeight: "medium",
        },
        xsDescription: {
          color: "gray",
          fontSize: "12px",
        },
        highlightBlack: {
          color: "black",
          fontWeight: "bold",
        },
      },
    },
    Button: {
      defaultProps: {},
      variants: {
        black: {
          bg: "black.500",
          color: "white",
          _hover: {
            bg: "black.400",
          },
        },
        outlineGray: {
          border: "1px solid",
          borderColor: "lightGray.500",
          _hover: {
            bg: "lightGray.300",
          },
        },
      },
    },
    Badge: {
      baseStyle: {
        px: 3,
        py: 0.5,
        fontWeight: "medium",
        textTransform: "none",
        borderRadius: 50,
      },
      variants: {
        gray: {
          bg: "#F3F4F6",
        },
        black: {
          bg: "black.500",
          color: "white",
        },
        red: {
          bg: "red.500",
          color: "white",
        },
        peach: {
          bg: "#FEE2E2",
          color: "#991B1B",
        },
        blue: {
          bg: "#E6F4FE",
          color: "#2582D3",
        },
        yellow: {
          bg: "#FEF9C3",
          color: "#854D0E",
        },
        green: {
          bg: "#DCFCE7",
          color: "#206D3D",
        },
        purple: {
          bg: "#F3E8FF",
          color: "#6B21A8",
        },
        outlineBlack: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "lightGray.500",
        },
      },
    },
  },
});

export default theme;
