for f in *.js;do
    [ -f "$f" ] && cp "$f" "${f%js}mjs"
done
