{ pkgs }: {
  deps = [
    pkgs.nodejs
    pkgs.}
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}