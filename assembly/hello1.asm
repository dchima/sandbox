  global _main
  extern _puts

  section .text
_main:
  sub     rsp, 8                ; Pad stack frame as required for 64-bit OSX
                                ;  - we know the 'call' instruction will add
                                ;    8 bytes to the stack, so we pad it with
                                ;    another 8 bytes.

  lea     rdi, [message]
  call    _puts

  add     rsp, 8                ; Get our old stack pointer back by removing our
                                ; previous padding

  ret

  section .data
message:
default rel
  db   "Hola, mundo",0          ; Note that strings must be terminated with 0
                                ;  in C