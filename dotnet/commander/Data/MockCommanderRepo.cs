using System.Collections.Generic;
using commander.models;

namespace commander.Data
{
  public class MockCommanderRepo : ICommanderRepo
  {
    public IEnumerable<Command> GetAllCommands()
    {
      var commands = new List<Command>
      {
        new Command{Id=0, HowTo="boil an egg", Line="boil water", Platform="kettle and pan"},
        new Command{Id=1, HowTo="fry fish", Line="boil water", Platform="frying pan"},
        new Command{Id=2, HowTo="make beans", Line="boil beans", Platform="pot and pan"}
      };

      return commands;
    }

    public Command GetCommandById(int id)
    {
      return new Command{Id=0, HowTo="boil an egg", Line="boil water", Platform="kettle and pan"};
    }
  }
}