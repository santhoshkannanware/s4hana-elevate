import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const LOGO_SVG = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQwIDcwIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOm5vbmU7fS5jbHMtMXtjbGlwLXJ1bGU6ZXZlbm9kZDt9LmNscy0ze2ZpbGw6I2ZmZjt9LmNscy00e2ZpbGw6I2RiODYwNDt9LmNscy00LC5jbHMtOXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy01e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNntjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMik7fS5jbHMtN3tjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMyk7fS5jbHMtOHtvcGFjaXR5OjAuNTt9LmNscy05e2ZpbGw6I2ZmYWMwMDt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjU4LjUzIDMwLjYgNjIuODcgMjQuNjUgNzUuNzQgNDQuMzIgNjcuNDQgNDQuMzIgNTguNTMgMzAuNiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI0NS44NyIgeT0iLTAuOTkiIHdpZHRoPSI0My43NyIgaGVpZ2h0PSI0Ny45MiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMyI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSI1OC40OCIgeT0iMjQuNTIiIHdpZHRoPSIxNy41MSIgaGVpZ2h0PSIxOS44NCIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZT5maW5hbF9rYW5uYW53YXJlX2xvZ28tMDAyPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMjguMjQsNTYuMzlWNTQuODFoNnYxLjU4Wk0xMjUsNjEuMDhWNTAuM2g5LjYzdjEuODhoLTcuNzZ2N2g3Ljc3djEuODhabS0zLjY1LDAtMi43My0zaC00VjU2LjQyaDQuNWEyLDIsMCwwLDAsMS41NC0uNTUsMi4yNiwyLjI2LDAsMCwwLC41Mi0xLjYxLDIuMDYsMi4wNiwwLDAsMC0uNTQtMS41NywyLjEzLDIuMTMsMCwwLDAtMS41Mi0uNTFoLTUuODh2OC45aC0xLjg3VjUwLjNoNy43NWE0Ljc2LDQuNzYsMCwwLDEsMS42NS4yNywzLjMsMy4zLDAsMCwxLDEuMjMuNzksMy40NywzLjQ3LDAsMCwxLC43NywxLjI0LDQuNiw0LjYsMCwwLDEsLjI3LDEuNjMsNC4xMSw0LjExLDAsMCwxLS41OSwyLjI2LDMuMjMsMy4yMywwLDAsMS0xLjY0LDEuMzFMMTI0LDYxLjA4Wm0tMTMuNDQsMC0xLjYyLTIuNzFoLTUuMWwuODktMS41M2gzLjMxbC0yLjQxLTQtNC44OSw4LjI4SDk1LjkybDYuMjEtMTAuMzJhMS40MiwxLjQyLDAsMCwxLC4zOC0uNDUuODkuODksMCwwLDEsLjU0LS4xNi44My44MywwLDAsMSwuNTIuMTYsMS40MiwxLjQyLDAsMCwxLC4zOC40NWw2LjIyLDEwLjMyWm0tMTguMjQtMy42TDg4LDYwLjY0YTEuMTksMS4xOSwwLDAsMS0uNDIuNDQsMS4wNiwxLjA2LDAsMCwxLS41NS4xNSwxLjA3LDEuMDcsMCwwLDEtMS0uNTlMODAuNDYsNTAuM2gyLjI2bDQuMzYsOC4yOSwxLjYzLTIuOTQtMi44LTUuMzVoMi4yN2w0LjE3LDguMjksNC4zOS04LjI5aDIuMTFMOTMuMjcsNjAuNjRhMS4xOSwxLjE5LDAsMCwxLS40Mi40NCwxLjEyLDEuMTIsMCwwLDEtLjU2LjE1LDEuMDYsMS4wNiwwLDAsMC0uNTUtLjE1LDEuMDksMS4wOSwwLDAsMC0uNDEtLjQ0Wk03MCw1My4xOXY3Ljg5aC0xLjhWNTEuMjlhMS4yMiwxLjIyLDAsMCwxLC4yNi0uODIuODguODgsMCwwLDEsLjcxLS4zMS45My45MywwLDAsMSwuNC4wOSwxLjQ0LDEuNDQsMCwwLDEsLjQuM2w3LjYxLDcuNTVWNTAuMjFoMS44djkuODhhMS4yNSwxLjI1LDAsMCwxLS4yNi44My44Ni44NiwwLDAsMS0uNjguMjksMS4yMSwxLjIxLDAsMCwxLS44Ni0uNFptLTUuMTgsNy44OS0xLjYyLTIuNzFoLTUuMUw1OSw1Ni44NGgzLjMxbC0yLjQtNEw1NSw2MS4wOEg1Mi44NEw1OSw1MC43NmExLjQ0LDEuNDQsMCwwLDEsLjM5LS40NS44NC44NCwwLDAsMSwuNTMtLjE2Ljg2Ljg2LDAsMCwxLC41My4xNiwxLjU2LDEuNTYsMCwwLDEsLjM4LjQ1bDYuMjEsMTAuMzJaTTQyLjM2LDUzLjE5djcuODlINDAuNTdWNTEuMjlhMS4yMiwxLjIyLDAsMCwxLC4yNi0uODIuODYuODYsMCwwLDEsLjctLjMxLjkuOSwwLDAsMSwuNC4wOSwxLjMxLDEuMzEsMCwwLDEsLjQuM0w1MCw1OC4xVjUwLjIxaDEuNzl2OS44OGExLjI1LDEuMjUsMCwwLDEtLjI2LjgzLjg0Ljg0LDAsMCwxLS42Ny4yOSwxLjE3LDEuMTcsMCwwLDEtLjg2LS40Wm0tMTIuOTUsMHY3Ljg5SDI3LjYyVjUxLjI5YTEuMTcsMS4xNywwLDAsMSwuMjYtLjgyLjg0Ljg0LDAsMCwxLC43LS4zMS45My45MywwLDAsMSwuNC4wOSwxLjQ0LDEuNDQsMCwwLDEsLjQuM0wzNyw1OC4xVjUwLjIxaDEuOHY5Ljg4YTEuMjUsMS4yNSwwLDAsMS0uMjYuODMuODQuODQsMCwwLDEtLjY4LjI5LDEuMjEsMS4yMSwwLDAsMC0uODYtLjRabS01LjE4LDcuODktMS42MS0yLjcxSDE3LjUxbC44OS0xLjUzaDMuMzFsLTIuNC00LTQuOSw4LjI4SDEyLjI2bDYuMi0xMC4zMmExLjQ0LDEuNDQsMCwwLDEsLjM5LS40NS44Ni44NiwwLDAsMSwuNTMtLjE2Ljg0Ljg0LDAsMCwxLC41My4xNiwxLjU2LDEuNTYsMCwwLDEsLjM4LjQ1TDI2LjUsNjEuMDhaTTAsNjEuMDhWNTAuM0gxLjg5VjYxLjA0Wm04Ljg5LDAtNi00Ljc1QTEsMSwwLDAsMSwyLjUzLDU2YTEuMzUsMS4zNSwwLDAsMS0uMDYtLjQxLDEuMDYsMS4wNiwwLDAsMSwuMDktLjQ1LDEuMTYsMS4xNiwwLDAsMSwuMzgtLjQxTDguNjYsNTAuM2gyLjg5TDQuNDksNTUuNTZsNy4yOCw1LjUyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSI1OC41MyAzMC42IDYyLjg3IDI0LjY1IDc1Ljc0IDQ0LjMyIDY3LjQ0IDQ0LjMyIDU4LjUzIDMwLjYiLz48ZyBjbGFzcz0iY2xzLTUiPjxnIGNsYXNzPSJjbHMtNiI+PGcgY2xhc3M9ImNscy03Ij48aW1hZ2UgY2xhc3M9ImNscy04IiB3aWR0aD0iNjgiIGhlaWdodD0iNzciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4LjQ4IDI0LjUyKSBzY2FsZSgwLjI2IDAuMjYpIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVVQUFBQk9DQVlBQUFCMlN0dnFBQUFBQ1hCSVdYTUFBQ3NQQUFBckR3RmxDWHpaQUFBRm9FbEVRVlI0WHUyWnpYSWFWeENGdjU0QklTdDJYSTdMdHVJa20xVGVJNnRVOW42UmJQTUNlY2lzRlFrUUlBUURETVA0ZEJZOVZ6T2dLMW1iUklEdXFab1NxckpWcFUrbnUwLzNpS29TdEswT1FDVHlSZUVUOEJINEh2Z0F2SytmYjRGdmdCNXdBa1QxSTYyZkkwQ2JyZ0lWa0FNWnNBQm13QVM0Qmk2QksrQWZnU0VpMTZvNmpVU1drY2k2cUtvY0tQV1ovbUtkK3V1UHdEa0c1Uk1HNDIzOXZBSk82MzhiWXdDZUFxVEFnS3lBQkpoaVFQb1lrTDdBRUJnRE14RlpBZXV6WHErWXAybjFYRUNnaHFMd0dZUHlvWDYrQlY1akRya0J1alFPYWV0clFOWTBRTVlZbEFFd0ZQczhBV2FxdWdUV0N2azhUWi9OSVU3T0tUL1JsTXhiRE1ZWkJpU21jVWhidTk5ci9aVEFCa2lCT2ZhTGo0Q0J3SldhUXdiQUNKR1p3Q0lTU1Vzcm1XZDFpSk9EY2c1OGh3RjVUZE0vT3ZqN0IvZ2QwZ2FTQUxmVURoRVlhdTBRaFluQUROVkVJYTFVODA0VWxYbFpWdXlCSEpTUEdKQXpERWdYYzhkRFFIYmxISkpqUFdTQkFSbGhmYU92Y0ZVN1pDd2lVNEdrVWwwRGVieEhRS0NCNGh4eVFqTmhmQTNWcWUwUzU1QWM2eUZMV2c3QnlxWmZmeDVqUUJhWW16WkFVZXdSRUdpZ3ZNRWM0dHpoYTZoT2p3RnBqOTRoNW94Ky9YbFVBMG5FZXNqbWgvZnZTeEY1OWg2eUsvZkw5MmhHN2xPQitFWnZPNHNNNnNmR3JzZ05WakxMc3FveW9EenBkcXVMMFdqdm9JaXFJaUk1OS9zSFBBNmt4SUE0aDdpUzZXTXdMdXF5NmF1QnVnVVdJcEtvNnQ1TUdwK2kxdGZkL3ZGVWh5eG9ScTl6eUJVRzR4cTRBVzRGVmlLU3hTS0ZpT3d0RUdoNnltTVQ1aUdIdE5QcURjMmtjZUZzak1nRW1JdnFTa1N5U3JVb1ZKODluSDFOSGJiMU5TQzdXV1NPQWRseWlNQUFrUW1xTTdWd2xsV3FHL2E0Wk5wcU45V0hNZ2pjVDZzckRNaGRmSmZHSVNPdFMwYXR0TmFkT0M0aUs1bTlHcjBQeVZjKzhMQkRkaGM4RjkvNzJscndST1JXVlJPc0NlZWJvaWdQQlFqY0g3OCt0UjJTc2oxcHJySDRQcEJtd2J0VjFTU09vcXorUCtXWDMzN2QrNUpwYTdlbmdEK2NiZGdadldJdytyVGlPeUpUSUJIVlZGVTMzVGd1TjBWeE1BNXgyb1h5MktUWmNvaGEveGhTeDNlRkc0R0ZxcVpBcnFwbGVZQkFZQnZLcmtQYzVjd0gzNitrbmpUVThSM1ZSR0NsNXFyOHROczlxSkpweS9XVWg0QmsySUxuZ0xnc2N1Y1FSS2FxT2dkV2xXcldqZU1DMEhTek9YZ29UcTVrdkxkVkY5dXhISEozT1JPUmxZaHNnT0swMnoySUxQS2MybERjNlBYZFZzZlVVd2EzOGFyZUlKS282akt1OTVsSXBKcW42VUVEZ2UzeWNVQmNPR3Yza0sxanM0aE1FTG5GbkpTZDlYb0ZVSlZWZGZCQW9JR3lDOFNkRXR0TDNsQ3NxZDVneCtaVkxKSmh4K2JpMEV1bUxRZWxIZC9ibzllTlhidSsyNEkzVTlXbHdMcXdROUhCOTVCZHVYdktISnN5Q1FiRDNVVXVnVXV4Sy93STIzbm1RSHJhN1c3V2VYNVE0ZjJwY2s1cHgzZTM5UTVweFhjUnVSVkk0aWhhQS9teEFvRUd5bFo0eDVxcWkrKzI5ZGF2STZqM21WOCtmejZxa21uTEpkcTdjRll2ZHk2Y2pSU21BZ3NINU0yclYrWEhkKytxdnk0dWpoYUtjNHJiZU4wWmNhRE5LWEd1c3VxMzN2S3MxenRxSU5BNFpVd2paU3ljd1JTUlJDQ05UTEt5cW9vNGlxckx5ZVNvZ1VBRHBYMENzTmVhSWpOVVZ3cVpRaUZRRldWNTlFQmdHOG9Ba1JFd0VWdndsbW9iY2xHcEhsMFdlVXl1cDdqUk93Ym1JckpVZTg5Yi9IeCsvcUtBUUIzZUlwSGY2NjEzQ2lTcW1uYmpPTS9POG1penlHTnlUaG1wNmxRZ2lVVlM0TVVDZ1FiS1RFUVdsV3BXcXVZbm5jN2V2N0Q2TDJWUTdDNlNkdU40bzZwbGx1Y1YyOWU0RjZVSVFDeXR2dWlTYWN1ZzFLZkV2Lzc0NDhVRGdlWjBFSE1nNzNuL0QwVUFuU2dLUUZxU3dPSytudkl1K2NVcFFQRW9RUEVvUVBFb1FQRW9RUEVvUVBFb1FQRW9RUEVvUVBFb1FQRW9RUEVvUVBFb1FQRW9RUEVvUVBFb1FQRW9RUEVvUVBFb1FQRW9RUEVvUVBFb1FQRW9RUEVvUVBFb1FQRW9RUEVvUVBFb1FQRW9RUEVvUVBFb1FQRW9RUEVvUVBIb1g5NGZsdEtSZTYvckFBQUFBRWxGVGtTdVFtQ0MiLz48L2c+PC9nPjwvZz48cG9seWdvbiBjbGFzcz0iY2xzLTkiIHBvaW50cz0iNTQuMTQgMTguNzYgNDcuMjkgMjIuNzUgNDcuMjkgNDQuMzEgODcuMzcgMC4wNiA1NC4xOSAyNy44NyA1NC4xNCAxOC43NiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEzMS4xNSw2Ni40djIuODloLS42NVY2NS43YS40Ny40NywwLDAsMSwuMDktLjMuMzMuMzMsMCwwLDEsLjI2LS4xMS40LjQsMCwwLDEsLjE1LDAsLjYuNiwwLDAsMSwuMTQuMTFsMi44LDIuNzdWNjUuMzFoLjY1djMuNjJhLjQ1LjQ1LDAsMCwxLS4wOS4zLjMuMywwLDAsMS0uMjUuMTEuNDQuNDQsMCwwLDEtLjMxLS4xNFpNMTI4LDY4LjZhMS40LDEuNCwwLDAsMCwuNTEtLjA5LDEuMzYsMS4zNiwwLDAsMCwuMzktLjI3LDEuMjksMS4yOSwwLDAsMCwuMjYtLjQyLDEuNCwxLjQsMCwwLDAsLjA5LS41MSwxLjQ2LDEuNDYsMCwwLDAtLjA5LS41MiwxLjIsMS4yLDAsMCwwLS4yNi0uNCwxLjM2LDEuMzYsMCwwLDAtLjM5LS4yN0ExLjQsMS40LDAsMCwwLDEyOCw2NmgtMWExLjMsMS4zLDAsMCwwLS40OS4wOSwxLjM2LDEuMzYsMCwwLDAtLjM5LjI3LDEuMTEsMS4xMSwwLDAsMC0uMjYuNCwxLjQ2LDEuNDYsMCwwLDAtLjA5LjUyLDEuNCwxLjQsMCwwLDAsLjA5LjUxLDEuMjksMS4yOSwwLDAsMCwuMjYuNDIsMS4zNiwxLjM2LDAsMCwwLC4zOS4yNywxLjMsMS4zLDAsMCwwLC40OS4wOVptLTEsLjY5YTEuODcsMS44NywwLDAsMS0uNzYtLjE1LDEuNzgsMS43OCwwLDAsMC0uNjEtLjQzLDEuODEsMS44MSwwLDAsMC0uNDEtLjYzLDIuMzYsMi4zNiwwLDAsMS0uMTQtLjgsMi4yNCwyLjI0LDAsMCwxLC4xNC0uOCwxLjczLDEuNzMsMCwwLDEsLjQxLS42MSwxLjY4LDEuNjgsMCwwLDEsLjYxLS4zOSwxLjg3LDEuODcsMCwwLDEsLjc2LS4xNGgxYTIsMiwwLDAsMSwuNzkuMTQsMS43OSwxLjc5LDAsMCwxLDEsMSwyLjIyLDIuMjIsMCwwLDEsLjE0Ljc5LDIuMzYsMi4zNiwwLDAsMC0uMTQuOCwxLjgxLDEuODEsMCwwLDEtLjQxLjYzLDEuNzgsMS43OCwwLDAsMC0uNjEuNDMsMS45NCwxLjk0LDAsMCwxLS43OC4xNVptLTMuMjIsMHYtNGguNjl2NFptLTIuNjksMFY2NmgtMS41di0uNjloMy42OVY2NmgtMS41djMuMjZabS0xLjgyLDAtLjYtMWgtMS44N2wuMzMtLjU2aDEuMjFsLS44OC0xLjQ4LTEuOCwzaC0uNzlsMi4yOC0zLjc4YS42MS42MSwwLDAsMSwuMTQtLjE3LjM0LjM0LDAsMCwxLC4yLS4wNi4zMS4zMSwwLDAsMSwuMTkuMDYuNjEuNjEsMCwwLDEsLjE0LjE3bDIuMjgsMy43OFptLTguNTUtNGguODVsMS43OSwzLDEuNzktM2guOGwtMi4yOCwzLjc5YS41Ny41NywwLDAsMS0uMTUuMTYuMjkuMjksMCwwLDEtLjE5LjA2LjMxLjMxLDAsMCwxLS4xOS0uMDYuNTQuNTQsMCwwLDEtLjE0LS4xNlptLTEuNywzLjI2YTEuMTYsMS4xNiwwLDAsMCwuODktLjM2LDEuMjksMS4yOSwwLDAsMCwuMjYtLjQyLDEuNCwxLjQsMCwwLDAsLjA5LS41MSwxLjQ2LDEuNDYsMCwwLDAtLjA5LS41MiwxLjIsMS4yLDAsMCwwLS4yNi0uNCwxLjE2LDEuMTYsMCwwLDAtLjg5LS4zNmgtMWExLjMzLDEuMzMsMCwwLDAtLjQ5LjA5LDEuMzYsMS4zNiwwLDAsMC0uMzkuMjcsMS4wOSwxLjA5LDAsMCwwLS4yNS40LDEuNDYsMS40NiwwLDAsMC0uMS41MiwxLjQsMS40LDAsMCwwLC4xLjUxLDEuMjcsMS4yNywwLDAsMCwuMjUuNDIsMS4zNiwxLjM2LDAsMCwwLC4zOS4yNywxLjMzLDEuMzMsMCwwLDAsLjQ5LjA5Wm0tMSwuNjlhMS45MSwxLjkxLDAsMCwxLS43Ni0uMTUsMS44OCwxLjg4LDAsMCwxLS42MS0uNDMsMS43OSwxLjc5LDAsMCwxLS40LS42MywyLjE1LDIuMTUsMCwwLDEtLjE1LS44LDIsMiwwLDAsMSwuMTUtLjgsMS43LDEuNywwLDAsMSwuNC0uNjEsMS43NywxLjc3LDAsMCwxLC42MS0uMzksMS45LDEuOSwwLDAsMSwuNzYtLjE0aDFhMiwyLDAsMCwxLC43OC4xNCwxLjc0LDEuNzQsMCwwLDEsLjYyLjQsMS42OCwxLjY4LDAsMCwxLC4zOS42MSwyLDIsMCwwLDEsLjE1Ljc5LDIuMTUsMi4xNSwwLDAsMC0uMTUuOCwxLjc5LDEuNzksMCwwLDEtLjQuNjMsMS44OCwxLjg4LDAsMCwxLS42MS40MywyLDIsMCwwLDEtLjc4LjE1Wm0tNS45MS0yLjg5djIuODloLS42NlY2NS43YS40Mi40MiwwLDAsMSwuMS0uMy4zMy4zMywwLDAsMSwuMjUtLjExLjQuNCwwLDAsMSwuMTUsMCwuNDguNDgsMCwwLDEsLjE1LjExTDEwNSw2OC4yVjY1LjMxaC42NnYzLjYyYS40LjQsMCwwLDEtLjEuMy4yOC4yOCwwLDAsMS0uMjQuMTEuNDcuNDcsMCwwLDEtLjMyLS4xNFptLTQuNzUsMHYyLjg5aC0uNjZWNjUuN2EuNDcuNDcsMCwwLDEsLjA5LS4zLjM1LjM1LDAsMCwxLC4yNi0uMTEuNC40LDAsMCwxLC4xNSwwLC40OC40OCwwLDAsMSwuMTUuMTFsMi43OSwyLjc3VjY1LjMxaC42NnYzLjYyYS40LjQsMCwwLDEtLjEuMy4yOC4yOCwwLDAsMS0uMjUuMTEuNDYuNDYsMCwwLDEtLjMxLS4xNFptLTIuMDYsMi44OXYtNGguNjl2NFptLTQuMTMtLjY5YTEuMywxLjMsMCwwLDAsLjQ5LS4wOSwxLjM2LDEuMzYsMCwwLDAsLjM5LS4yNywxLjI5LDEuMjksMCwwLDAsLjI2LS40MiwxLjQsMS40LDAsMCwwLC4xLS41MSwxLjQ2LDEuNDYsMCwwLDAtLjEtLjUyLDEuMiwxLjIsMCwwLDAtLjI2LS40LDEuMzYsMS4zNiwwLDAsMC0uMzktLjI3LDEuMywxLjMsMCwwLDAtLjQ5LS4wOUg4OS42NFY2OC42Wk04OSw2OS4yOXYtNGgyLjI5YTEuOTIsMS45MiwwLDAsMSwuNzcuMTQsMS43OSwxLjc5LDAsMCwxLDEsMSwyLDIsMCwwLDEsLjE1Ljc5LDIuMTUsMi4xNSwwLDAsMC0uMTUuOCwxLjkyLDEuOTIsMCwwLDEtMSwxLjA2LDEuOTIsMS45MiwwLDAsMS0uNzcuMTVaTTg0Ljg1LDY2LjR2Mi44OWgtLjY2VjY1LjdhLjQyLjQyLDAsMCwxLC4xLS4zLjMzLjMzLDAsMCwxLC4yNS0uMTEuMzcuMzcsMCwwLDEsLjE1LDAsLjQ4LjQ4LDAsMCwxLC4xNS4xMWwyLjc5LDIuNzdWNjUuMzFoLjY2djMuNjJhLjQuNCwwLDAsMS0uMS4zLjI4LjI4LDAsMCwxLS4yNC4xMS40Ny40NywwLDAsMC0uMzItLjE0Wk04Myw2OS4yOWwtLjU5LTFIODAuNDhsLjMzLS41Nkg4MmwtLjg4LTEuNDgtMS43OSwzaC0uNzlsMi4yNy0zLjc4YS42MS42MSwwLDAsMSwuMTQtLjE3LjM0LjM0LDAsMCwxLC4yLS4wNi4yOS4yOSwwLDAsMSwuMTkuMDYuNDcuNDcsMCwwLDEsLjE0LjE3bDIuMjgsMy43OFpNNzMuMTIsNjYuNHYyLjg5aC0uNjZWNjUuN2EuNDcuNDcsMCwwLDEsLjA5LS4zLjM1LjM1LDAsMCwxLC4yNi0uMTEuNC40LDAsMCwxLC4xNSwwLC42LjYsMCwwLDEsLjE0LjExbDIuOCwyLjc3VjY1LjMxaC42NnYzLjYyYS40NS40NSwwLDAsMS0uMS4zLjMuMywwLDAsMS0uMjUuMTEuNDQuNDQsMCwwLDEtLjMxLS4xNFpNNzAsNjguNmExLjM5LDEuMzksMCwwLDAsLjUtLjA5LDEuMzYsMS4zNiwwLDAsMCwuMzktLjI3LDEuMjksMS4yOSwwLDAsMCwuMjYtLjQyLDEuNCwxLjQsMCwwLDAsLjA5LS41MSwxLjQ2LDEuNDYsMCwwLDAtLjA5LS41MiwxLjIsMS4yLDAsMCwwLS4yNi0uNCwxLjM2LDEuMzYsMCwwLDAtLjM5LS4yN0ExLjM5LDEuMzksMCwwLDAsNzAsNjZINjlhMS4zLDEuMywwLDAsMC0uNDkuMDksMS4zNiwxLjM2LDAsMCwwLS4zOS4yNywxLjI2LDEuMjYsMCwwLDAtLjI2LjQsMS40NiwxLjQ2LDAsMCwwLS4wOS41MiwxLjQsMS40LDAsMCwwLC4wOS41MSwxLjQ5LDEuNDksMCwwLDAsLjI2LjQyLDEuMzYsMS4zNiwwLDAsMCwuMzkuMjcsMS4zLDEuMywwLDAsMCwuNDkuMDlabS0xLC42OWExLjkxLDEuOTEsMCwwLDEtLjc2LS4xNSwxLjc4LDEuNzgsMCwwLDEtLjYxLS40MywxLjgxLDEuODEsMCwwLDEtLjQxLS42MywyLjM2LDIuMzYsMCwwLDEtLjE0LS44LDIuMjQsMi4yNCwwLDAsMSwuMTQtLjgsMS43MywxLjczLDAsMCwxLC40MS0uNjEsMS42OCwxLjY4LDAsMCwxLC42MS0uMzksMS45LDEuOSwwLDAsMSwuNzYtLjE0aDFhMiwyLDAsMCwxLC43OC4xNCwxLjc5LDEuNzksMCwwLDEsMSwxLDIsMiwwLDAsMSwuMTQuNzksMi4zNiwyLjM2LDAsMCwxLS4xNC44LDEuOTQsMS45NCwwLDAsMS0uNC42MywxLjg3LDEuODcsMCwwLDEtMS4zOS41OFptLTMuMjIsMHYtNGguNjl2NFptLTIuNjksMFY2Nkg2MS42di0uNjloMy42OVY2NmgtMS41djMuMjZaTTU3LjcyLDY2LjR2Mi44OWgtLjY2VjY1LjdhLjQ3LjQ3LDAsMCwxLC4xLS4zLjMzLjMzLDAsMCwxLC4yNi0uMTEuNC40LDAsMCwxLC4xNSwwLC42LjYsMCwwLDEsLjE0LjExTDYwLjUsNjguMlY2NS4zMWguNjZ2My42MmEuNDUuNDUsMCwwLDEtLjA5LjMuMzEuMzEsMCwwLDEtLjI1LjExLjQ5LjQ5LDAsMCwxLS4zMi0uMTRabS0zLjU4LDEuMTdWNjdoMi4ydi41OFpNNTMsNjkuMjl2LTRoMy41M1Y2Nkg1My42NFY2OC42aDIuODV2LjY5Wm0tNS42NS00aC44NGwxLjgsMywxLjc5LTNoLjhsLTIuMjgsMy43OWEuNTcuNTcsMCwwLDEtLjE1LjE2LjI5LjI5LDAsMCwxLS4xOS4wNi4zMS4zMSwwLDAsMS0uMTktLjA2LjU0LjU0LDAsMCwxLS4xNC0uMTZaTTQzLjQ2LDY2LjR2Mi44OUg0Mi44VjY1LjdhLjQyLjQyLDAsMCwxLC4xLS4zLjMzLjMzLDAsMCwxLC4yNS0uMTEuNC40LDAsMCwxLC4xNSwwLC40OC40OCwwLDAsMSwuMTUuMTFsMi43OSwyLjc3VjY1LjMxaC42NnYzLjYyYS40LjQsMCwwLDEtLjEuMy4yOC4yOCwwLDAsMS0uMjQuMTEuNDcuNDcsMCwwLDEtLjMyLS4xNFpNNDEuNCw2OS4yOXYtNGguNjl2NFptLTMsLjY1VjY4LjUyaC43bC0uMjcsMS40MlptLTIuMjMtLjY1di0xLjVsLTIuMS0yLjQ1SDM1bDEuNTQsMS44MiwxLjU1LTEuODJIMzlsLTIuMTEsMi40NXYxLjVabS0yLjY4LDAtMS0xLjFIMzF2LS42aDEuNjVhLjc0Ljc0LDAsMCwwLC41Ny0uMjEuODEuODEsMCwwLDAsLjE5LS41OS43NC43NCwwLDAsMC0uMi0uNTcuNzYuNzYsMCwwLDAtLjU2LS4xOUgzMC40OHYzLjI2aC0uNjl2LTRoMi44NGExLjY2LDEuNjYsMCwwLDEsLjYxLjEsMS4xNywxLjE3LDAsMCwxLC40NS4yOSwxLjE1LDEuMTUsMCwwLDEsLjI4LjQ1LDEuNjQsMS42NCwwLDAsMSwuMS42LDEuNTMsMS41MywwLDAsMC0uMjEuODMsMS4yNywxLjI3LDAsMCwxLS42MS40OGwxLjIsMS4yWm0tNi42Mi0xLjcyVjY3aDIuMnYuNThabS0xLjE5LDEuNzJ2LTRoMy41M1Y2NkgyNi4zNVY2OC42SDI5LjJ2LjY5Wm0tNS42NS00aC44NWwxLjc5LDMsMS43OS0zaC44TDIzLDY5LjEzYS43My43MywwLDAsMS0uMTQuMTYuMzQuMzQsMCwwLDEtLjIuMDYuMzEuMzEsMCwwLDEtLjE5LS4wNi41NC41NCwwLDAsMC0uMTQtLjE2Wm0tMS43LDMuMjZhMS4xNiwxLjE2LDAsMCwwLC44OS0uMzYsMS4yOSwxLjI5LDAsMCwwLC4yNi0uNDIsMS40LDEuNCwwLDAsMCwuMDktLjUxLDEuNDYsMS40NiwwLDAsMC0uMDktLjUyLDEuMiwxLjIsMCwwLDAtLjI2LS40LDEuMTYsMS4xNiwwLDAsMC0uODktLjM2aC0xYTEuMTYsMS4xNiwwLDAsMC0uODkuMzYsMS4wOSwxLjA5LDAsMCwwLS4yNS40LDEuNDYsMS40NiwwLDAsMC0uMDkuNTIsMS40LDEuNCwwLDAsMCwuMDkuNTEsMS4yNywxLjI3LDAsMCwwLC4yNS40MiwxLjE2LDEuMTYsMCwwLDAsLjg5LjM2Wm0tMSwuNjlhMS45MiwxLjkyLDAsMCwxLS43Ny0uMTUsMS44OCwxLjg4LDAsMCwxLS42MS0uNDMsMS43OSwxLjc5LDAsMCwxLS40LS42MywyLjE1LDIuMTUsMCwwLDEtLjE1LS44LDIsMiwwLDAsMSwuMTUtLjgsMS43LDEuNywwLDAsMSwuNC0uNjEsMS43NywxLjc3LDAsMCwxLC42MS0uMzksMS45MiwxLjkyLDAsMCwxLC43Ny0uMTRoMWEyLDIsMCwwLDEsLjc5LjE0LDEuOCwxLjgsMCwwLDEsLjYxLjQsMS42OCwxLjY4LDAsMCwxLC4zOS42MSwyLDIsMCwwLDEsLjE1Ljc5LDIuMTUsMi4xNSwwLDAsMC0uMTUuOCwxLjc5LDEuNzksMCwwLDEtLjQuNjMsMS44OCwxLjg4LDAsMCwxLS42MS40MywyLDIsMCwwLDEtLjc4LjE1Wm0tNC41MiwwYTEuOTEsMS45MSwwLDAsMC0uNzYtLjE1LDEuOTIsMS45MiwwLDAsMC0xLTEuMDYsMi4xNSwyLjE1LDAsMCwxLS4xNS0uOCwyLDIsMCwwLDEsLjE1LS44LDEuNywxLjcsMCwwLDEsLjQtLjYxLDEuNjgsMS42OCwwLDAsMSwuNjEtLjM5LDEuOSwxLjksMCwwLDEsLjc2LS4xNEgxNVY2NkgxMi44M2ExLjMzLDEuMzMsMCwwLDAtLjQ5LjA5LDEuMzYsMS4zNiwwLDAsMC0uMzkuMjcsMS4wOSwxLjA5LDAsMCwwLS4yNS40LDEuMjcsMS4yNywwLDAsMC0uMS41MiwxLjIyLDEuMjIsMCwwLDAsLjEuNTEsMS4yNywxLjI3LDAsMCwwLC4yNS40MiwxLjM2LDEuMzYsMCwwLDAsLjM5LjI3LDEuMzMsMS4zMywwLDAsMCwuNDkuMDlIMTV2LjY5Wm0tNi41OSwwVjY4LjZoM2EuNTcuNTcsMCwwLDAsLjQzLS4xNC40OC40OCwwLDAsMCwuMTUtLjM3LjUuNSwwLDAsMC0uMTUtLjM5LjY3LjY3LDAsMCwwLS40My0uMTNINy4zOWExLjM3LDEuMzcsMCwwLDEtLjUxLS4wOCwxLjEsMS4xLDAsMCwxLS4zOC0uMjMsMS4xMywxLjEzLDAsMCwxLS4yNC0uMzYsMS4zMywxLjMzLDAsMCwxLS4wOC0uNDVBMS4xMiwxLjEyLDAsMCwxLDYuMjYsNjZhMSwxLDAsMCwxLC4yMy0uMzUsMS4yOCwxLjI4LDAsMCwxLC4zOC0uMjMsMS43NCwxLjc0LDAsMCwxLC41My0uMDhoMi44NFY2Nkg3LjRhLjQ4LjQ4LDAsMCwwLS4zNy4xMy40NS40NSwwLDAsMC0uMTMuMzUuNDcuNDcsMCwwLDAsLjEzLjM2LjUyLjUyLDAsMCwwLC4zNi4xMkg5LjJhMS4zMiwxLjMyLDAsMCwxLC45Mi4yOSwxLjA3LDEuMDcsMCwwLDEsLjMxLjg1LDEuNDEsMS40MSwwLDAsMS0uMDcuNDcsMSwxLDAsMCwxLS4yMy4zNiwxLDEsMCwwLDEtLjM4LjI1LDEuNTUsMS41NSwwLDAsMS0uNTUuMDhabS0xLjQyLDB2LTRoLjY5djRaTTIuMjksNjguNmExLjMsMS4zLDAsMCwwLC40OS0uMDksMS41NiwxLjU2LDAsMCwwLC40LS4yNywxLjI3LDEuMjcsMCwwLDAsLjI1LS40MiwxLjIyLDEuMjIsMCwwLDAsLjEtLjUxLDEuMjcsMS4yNywwLDAsMC0uMS0uNTIsMS4xOCwxLjE4LDAsMCwwLS4yNS0uNCwxLjU2LDEuNTYsMCwwLDAtLjQtLjI3QTEuMywxLjMsMCwwLDAsMi4yOSw2NkguNjlWNjguNlpNMCw2OS4yOXYtNEgyLjI5YTEuOTIsMS45MiwwLDAsMSwuNzcuMTQsMS43LDEuNywwLDAsMSwuNjEuNCwxLjcsMS43LDAsMCwxLC40LjYxLDIsMiwwLDAsMSwuMTUuNzksMi4xNSwyLjE1LDAsMCwxLS4xNS44LDEuNzksMS43OSwwLDAsMS0uNC42MywxLjc4LDEuNzgsMCwwLDEtLjYxLjQzLDEuOTIsMS45MiwwLDAsMC0uNzcuMTVaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTM3LjI0LDQ5LjIzaC40NmEuNzEuNzEsMCwwLDAsLjQ1LS4xLjMxLjMxLDAsMCwwLC4xMi0uMjYuMjguMjgsMCwwLDAtLjA2LS4xOC4zNC4zNCwwLDAsMC0uMTYtLjEzLDEuNDksMS40OSwwLDAsMC0uMzgsMGgtLjQzWm0tLjM4LDEuMzJWNDguMmguOGEyLDIsMCwwLDEsLjYuMDcuNTMuNTMsMCwwLDEsLjMuMjMuNi42LDAsMCwxLC4xMS4zNC42NC42NCwwLDAsMS0uMTguNDUuNzEuNzEsMCwwLDEtLjQ5LjIxLjc3Ljc3LDAsMCwxLC4yLjEzLDIuMzYsMi4zNiwwLDAsMSwuMzQuNDZsLjI5LjQ2aC0uNDZsLS4yMS0uMzdhMS43MywxLjczLDAsMCwwLS40LS41NC40NS40NSwwLDAsMC0uMy0uMDhoLS4yMnYxWm0xLTNhMS44NCwxLjg0LDAsMCwwLS45LjI0LDEuNjMsMS42MywwLDAsMC0uNjguNjcsMS44MiwxLjgyLDAsMCwwLS4yNS45MiwxLjg0LDEuODQsMCwwLDAsLjI0LjksMS43MSwxLjcxLDAsMCwwLC42OC42OCwxLjgzLDEuODMsMCwwLDAsMS44MSwwLDEuNzEsMS43MSwwLDAsMCwuNjgtLjY4LDEuODQsMS44NCwwLDAsMCwuMjQtLjksMS44MiwxLjgyLDAsMCwwLS4yNS0uOTIsMS42MywxLjYzLDAsMCwwLS42OC0uNjdBMS44MywxLjgzLDAsMCwwLDEzNy44Miw0Ny41MlptMC0uMzZhMi4yMiwyLjIyLDAsMCwxLDEuMDcuMjgsMi4wNiwyLjA2LDAsMCwxLC44Mi44MSwyLjI5LDIuMjksMCwwLDEsLjI5LDEuMSwyLjIxLDIuMjEsMCwwLDEtLjI5LDEuMDgsMiwyLDAsMCwxLS44MS44MSwyLjE3LDIuMTcsMCwwLDEtMi4xNywwLDIsMiwwLDAsMS0uODEtLjgxLDIuMTEsMi4xMSwwLDAsMS0uMjktMS4wOCwyLjI5LDIuMjksMCwwLDEsLjI5LTEuMSwyLjA2LDIuMDYsMCwwLDEsLjgyLS44MUEyLjIzLDIuMjMsMCwwLDEsMTM3LjgyLDQ3LjE2WiIvPjwvc3ZnPg==";

interface DropdownItem {
  label: string;
  href?: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Product Expertise",
    children: [
      { label: "S4/HANA (Public & Private Cloud)", href: "/product-expertise/s4hana" },
      { label: "SAP® - BTP", href: "/product-expertise/btp" },
      { label: "SAP Data Sphere", href: "/product-expertise/data-sphere" },
      { label: "SAP® ECC", href: "/product-expertise/ecc" },
      { label: "SAP Analytics Cloud (Planning & Reporting)", href: "/product-expertise/analytics-cloud" },
      { label: "SAP BW4 HANA", href: "/product-expertise/bw4-hana" },
      { label: "Group Reporting", href: "/product-expertise/group-reporting" },
      { label: "Billing and Revenue Innovation Management", href: "/product-expertise/brim" },
      { label: "SAP Business Objects", href: "/product-expertise/business-objects" },
      { label: "Multi Banking Connectivity", href: "/product-expertise/multi-banking" },
      { label: "Agentic AI with Joule*", href: "/product-expertise/agentic-ai" },
    ],
  },
  {
    label: "Functional & Process Capability",
    children: [
      { label: "Record to Report", href: "/capability/record-to-report" },
      { label: "Source to Pay", href: "/capability/source-to-pay" },
      { label: "Treasury", href: "/capability/treasury" },
      { label: "Projects", href: "/capability/projects" },
      { label: "Operate and Maintain", href: "/capability/operate-and-maintain" },
      { label: "Order to Cash", href: "/capability/order-to-cash" },
    ],
  },
  {
    label: "Programs",
    children: [
      { label: "Office of the CFO (Solutions & Services)", href: "/programs/office-of-cfo" },
      { label: "Grow with SAP", href: "/programs/grow-with-sap" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Energy & Natural Resources", href: "#industries" },
      { label: "Discrete Manufacturing", href: "#industries" },
      { label: "Services Management", href: "#industries" },
      { label: "Financial Services", href: "#industries" },
      { label: "Public Services", href: "#industries" },
      { label: "Consumer", href: "#industries" },
      { label: "Food & Beverage", href: "#industries" },
    ],
  },
  {
    label: "Transformation Services",
    children: [
      { label: "Advisory", href: "#services" },
      { label: "Execution", href: "#services" },
      { label: "Data & Analytics", href: "#services" },
      { label: "Experts as a Service (EaaS)", href: "#services" },
    ],
  },
  {
    label: "Insights",
    children: [
      { label: "Blogs", href: "#insights" },
      { label: "Case Studies", href: "#insights" },
      { label: "Knowledge Base", href: "#insights" },
    ],
  },
];

function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const enter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <li className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1 text-[.78rem] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-gold cursor-none bg-transparent border-none">
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 min-w-[220px] bg-[#181818] border border-white/10 rounded-md py-2 shadow-xl animate-fade-in z-50">
          {item.children?.map((child) => (
            <a
              key={child.label}
              href={child.href}
              className="block px-4 py-2 text-[.76rem] text-white/55 hover:text-gold hover:bg-white/5 transition-colors duration-150 no-underline cursor-none"
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] h-16 flex items-center justify-between px-5 md:px-10 transition-all duration-400"
      style={{
        background: "#0c0c0c",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,.07)" : "none",
      }}
    >
      <a href="#" className="flex items-center gap-3 no-underline cursor-none">
        <img src={LOGO_SVG} alt="Kannanware" className="h-9 w-auto block" />
        <span className="text-[.58rem] font-bold tracking-[.12em] uppercase text-gold border border-gold/35 px-2 py-0.5 ml-1">
          AI-First SAP
        </span>
      </a>

      <ul className="hidden lg:flex gap-7 list-none items-center">
        {navItems.map((item) =>
          item.children ? (
            <NavDropdown key={item.label} item={item} />
          ) : (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[.78rem] font-normal text-white/60 no-underline transition-colors duration-200 hover:text-gold cursor-none"
              >
                {item.label}
              </a>
            </li>
          )
        )}
      </ul>

      <button
        onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
        className="hidden md:block px-5 py-2.5 bg-gold text-black text-[.74rem] font-medium tracking-[.06em] border-none cursor-none transition-all duration-250 hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(232,160,0,.5)]"
      >
        BOOK A MEETING →
      </button>

      {/* Mobile toggle */}
      <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
        <span className={`block w-6 h-[2px] bg-white transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
      </button>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0c0c0c] border-t border-white/10 lg:hidden">
          <div className="px-5 py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <MobileAccordion item={item} onClose={() => setMobileOpen(false)} />
                ) : (
                  <a href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-white/60 hover:text-gold transition-colors">
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <button className="mt-4 px-5 py-2.5 bg-gold text-black text-xs font-semibold tracking-wider">
              BOOK A MEETING →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileAccordion({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-2 text-sm text-white/60 hover:text-gold transition-colors bg-transparent border-none">
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 pb-2 flex flex-col gap-1">
          {item.children?.map((child) => (
            <a key={child.label} href={child.href} onClick={onClose} className="block py-1.5 text-xs text-white/45 hover:text-gold transition-colors">
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
