using System.Collections.Generic;
using commander.models;

namespace commander.Data
{
  public interface ICommanderRepo
  {
    IEnumerable<Command> GetAllCommands();
    Command GetCommandById(int id);
  }
}