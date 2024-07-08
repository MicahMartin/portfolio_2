##### Summarizing and Explaining the Domain Scripting Language for Fighting Game Special Moves

#### Introduction

Fighting Game Command Parsers Are cool. Theyre part DSL, part functional composition, part buzzword, and you can design them in many different ways.

Imagine you're playing a classic fighting game like Street Fighter, where executing special moves like Ryu's Hadouken requires precise inputs. The code provided implements a domain-specific language (DSL) that interprets these input sequences and translates them into executable commands within the game.

#### Components of the System

1. **CommandCompiler.cpp & CommandCompiler.h**
   - **Purpose:** These files manage the compilation and initialization of special move commands.
   - **Key Features:**
     - **CommandStrings:** Defines sequences like "F, N, F" (forward, neutral, forward) or "@F & !D, N, F" (forward dash excluding down press).
     - **Compilation Process:** Parses and compiles these strings into executable command functions using `CommandScanner` and other utility functions.

```cpp
// CommandCompiler.h

#ifndef _CommandCompiler_h
#define _CommandCompiler_h

#include <string>
#include <vector>
#include "input/CommandScanner.h"
#include "input/VirtualController.h"
#include <functional>

typedef std::function<bool(int, bool)> CommandFunction;
struct CommandNode {
  CommandFunction function;
  int bufferLength;
};
typedef std::vector<CommandNode> Command;

class CommandCompiler {
public:

  CommandCompiler();
  ~CommandCompiler();

  void init();
  void compile(const char* inputString);

  CommandNode compileNode();
  CommandFunction binaryCommand(CommandFunction currentFunc, CommandTokenType type);

  static std::vector<std::string> commandStrings;
  std::vector<Command> commands;
  VirtualController* controllerPointer;
private:
  CommandScanner commandScanner;
  CommandToken* currentToken;
};

#endif /* _CommandCompiler_h */
```

2. **CommandScanner.cpp & CommandScanner.h**
   - **Purpose:** Implements the lexical analysis (scanning) of command strings.
   - **Key Features:**
     - **Tokenization:** Splits input strings into tokens such as directions (N, F, B, etc.), button presses (LP, LK, MP, MK), and modifiers (@, *, ~, !).
     - **Token Types:** Defines various token types (e.g., CTOKEN_FORWARD, CTOKEN_LP) for different inputs and modifiers.
     - **Functionality:** Handles whitespace skipping, alphanumeric checking, and token creation.

```cpp
// CommandScanner.h

#ifndef _CommandScanner_h
#define _CommandScanner_h

#include <vector>
typedef enum {
  CTOKEN_NEUTRAL, CTOKEN_FORWARD, CTOKEN_BACK, CTOKEN_UP, CTOKEN_DOWN,
  CTOKEN_UPFORWARD, CTOKEN_UPBACK, CTOKEN_DOWNFORWARD, CTOKEN_DOWNBACK,
  CTOKEN_LP, CTOKEN_LK, CTOKEN_MP, CTOKEN_MK,
  CTOKEN_NUMBER,

  CTOKEN_RELEASED, CTOKEN_HELD,

  CTOKEN_AND, CTOKEN_OR,

  CTOKEN_ANY, 
  CTOKEN_NOT,
  CTOKEN_DELIM,
  CTOKEN_END,

} CommandTokenType;

struct CommandToken {
  CommandTokenType type;
  const char* start;
  uint8_t length;
} ;

class CommandScanner {
public:
  CommandScanner();
  ~CommandScanner();

  std::vector<CommandToken> scan(const char* inputString);

  CommandTokenType getInputType();
  CommandToken makeToken(CommandTokenType type);
  bool isAtEnd();
  char peek();
  char peekNext();
  char advance();
  bool match(char expected);
  void skipWhitespace();
  bool isAlpha(char c);
  bool isDigit(char c);
  CommandTokenType checkKeyword(int start, int end, const char* rest, CommandTokenType type);

private:
  const char* scannerStart;
  const char* scannerCurrent;
};

#endif 
```

#### How It Works

1. **Input Definition**
   - **Tokens:** Each input direction (N, F, B, etc.) and button press (LP, LK, etc.) is tokenized and categorized by `CommandScanner`.
   - **Modifiers:** Symbols like @ (any), * (held), ~ (released), and ! (not) modify how inputs are interpreted.

2. **Compilation and Execution**
   - **Command Compilation:** `CommandCompiler` initializes by compiling predefined `commandStrings`, translating each string into executable commands.
   - **CommandNode & CommandFunction:** Each command is represented as a sequence of `CommandNode` structures, where each node contains a `CommandFunction` that evaluates whether the input matches the defined sequence.
   - **Execution:** During gameplay, the compiled commands are evaluated against player input (provided by `VirtualController`), determining if the player successfully inputs a special move sequence.

#### Example

Consider the command string `"~D, DF, F, D, DF, F, LK | ~LK"`, which translates to:
- **Inputs:** Released Down, Down-Forward, Forward, Down, Down-Forward, Forward
- **Button Press:** Light Kick or Released Light Kick

This sequence defines a special move input like Ryu's Shoryuken, where the player must perform specific directional inputs followed by a button press.

#### Conclusion

In summary, this DSL facilitates the definition and execution of complex special move inputs in fighting games. It leverages tokenization, compilation, and evaluation to translate player input sequences into actionable commands within the game engine. By understanding and utilizing this DSL, game developers can create engaging and responsive gameplay experiences, ensuring that executing special moves feels intuitive and rewarding for players.
