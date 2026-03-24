# STX Helper API

## stx-to-ustx
Converts STX to micro-STX.
```clarity
(stx-to-ustx u1) ;; Returns u1000000
```

## ustx-to-stx
Converts micro-STX to STX.
```clarity
(ustx-to-stx u1000000) ;; Returns u1
```

## min-of / max-of
Returns min/max of two uint values.

## is-valid-principal
Validates a principal address.
