@tasks.each do |task|
  
   json.set! task.id do
   json.extract! task, :id, :tasker_id, :location, :detail, :duration, :category_id
   end
 end
 